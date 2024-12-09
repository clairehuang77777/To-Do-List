import {
  AuthContainer,
  AuthInputContainer,
  AuthButton,
  AuthLinkText,
} from "../components/common/auth.styled";
import { AuthInput } from "../components";
import { ACLogoIcon } from "../assets/images";
import { useState } from 'react'
import { Link } from "react-router-dom";
import { login } from "../api/auth";
import Swal from "sweetalert2";

const LoginPage = () => {
  //用state管理onchange變化
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleAccountOnChange(event){
    setUsername(event.target.value);
    console.log(username)
  }
  function handlePassWordOnChange(event) {
    setPassword(event.target.value);
    console.log(password)
  }

  async function handleLoginClick(){
    if(username.length === 0){
      return
    }

    if(password.length === 0){
      return
    }
    
    const {success,authToken} = await login({username, password})

    if (success){
      localStorage.setItem("authToken",authToken)
      Swal.fire({
        title: "登入成功!",
        icon: "success",
        showConfirmButton: false,
        timer: 1000,
        position: "center",
      });
    }
    Swal.fire({
      title: "登入失敗!",
      icon: "error",
      showConfirmButton: false,
      timer: 1000,
      position: "center",
    });
  }

  return (
    <AuthContainer>
      <div>
        <ACLogoIcon />
      </div>
      <h1>登入 Todo</h1>

      <AuthInputContainer>
        <AuthInput
          label="帳號"
          placeholder="請輸入帳號"
          type="text"
          value={username}
          onChange={handleAccountOnChange}
        />
      </AuthInputContainer>

      <AuthInputContainer>
        <AuthInput
          label="密碼"
          placeholder="請輸入密碼"
          type="password"
          value={password}
          onChange={handlePassWordOnChange}
        />
      </AuthInputContainer>
      <AuthButton 
        onClick={handleLoginClick}>登入</AuthButton>
      <Link to="/signup">
        <AuthLinkText>註冊</AuthLinkText>
      </Link>
    </AuthContainer>
  );
};

export default LoginPage;
