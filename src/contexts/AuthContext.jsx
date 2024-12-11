import { createContext, useContext, useState } from "react"
//由此Context來統一儲存身份狀態
// import jwt from 'jsonwebtoken'
import { jwtDecode } from 'jwt-decode'
import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import { signup, login, checkPermission } from "../api/auth"

const defaultAuthContext = {
  isAuthenticated: false, //判斷使用者是否具有有效憑證, 預設是false, 當取得有效憑證(註冊成功或登入成功)則切換為true 
  currentMember: null, // 當前使用者資料, 預設為null, 成功登入後就會有使用者資料
  register: null, //註冊方法
  login: null, //登入方法
  logout: null //登出方法
}

const AuthContext = createContext(defaultAuthContext)

//建立AuthProvider管理狀態,回傳能讓子元件共用的<AuthContext.Provider>

//輸出context hook 
export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({children}) => {
  const [isAuthenticated, setIsAuthenticated]=useState(false)
  //透過解析token方式取得payload
  const [payload, setPayload]=useState(null)//這個payload會透過解析JSONwebToken來取得

  //把判斷身份是否有效的useEffect搬進來
  const {pathname} = useLocation()

    useEffect(() => {
      const CheckTokenIsValid = async() => {
        const authToken = localStorage.getItem("authToken");

        //如果沒有authToken, 停止檢查, 停留此頁
        if (!authToken) {
          console.log("authToken is not existed!")
          setIsAuthenticated(false)
          setPayload(null)
          return;
        }

        const isValid = await checkPermission(authToken); // 傳入 authToken 字串
        if (isValid) {
          setIsAuthenticated(true);
          const tempPayload = jwtDecode(authToken);
          setPayload(tempPayload);
        } else {
          setIsAuthenticated(false);
          setPayload(null);
          console.log("Invalid auth token");
        }
      }

      CheckTokenIsValid();
    }, [pathname]);


   //只要state狀態更新,接連更新provider所帶的value值
  return <AuthContext.Provider value={{
      isAuthenticated,
      currentMember: payload && {
        id: payload.sub,
        name: payload.name,
      },
      //因為authContext不會知道註冊表單輸入的值,補上data作為調用選項
      register: async (data) => {
        const { success, authToken } = await signup({
          username: data.username,
          email: data.email,
          password: data.password,
        });
        const tempPayload = jwtDecode(authToken);
        //先確認payload是否存在, 存在才代表登入有效, 就存起來
        if (tempPayload) {
          setPayload(tempPayload);
          setIsAuthenticated(true); //註冊成功
          localStorage.setItem("authToken", authToken);
        } else {
          setPayload(null);
          setIsAuthenticated(false);
        }
        return success;
      },
      login: async (data) => {
        const { success, authToken } = await login({
          username: data.username,
          password: data.password,
        });
        
        if (authToken) {
          const tempPayload = jwtDecode(authToken);
          setPayload(tempPayload);
          setIsAuthenticated(true);
          localStorage.setItem("authToken", authToken); // 確保正確儲存
        } else {
          setPayload(null);
          setIsAuthenticated(false);
        }
        return success;
      },
      logout: () => {
        localStorage.removeItem("authToken");
        setIsAuthenticated(false);
        setPayload(null);
      },
    }}
  >
    {children}
  </AuthContext.Provider>;
}

