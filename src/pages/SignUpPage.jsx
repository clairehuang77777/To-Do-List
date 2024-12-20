import {
  AuthContainer,
  AuthInputContainer,
  AuthButton,
  AuthLinkText,
} from "../components/common/auth.styled";
import { ACLogoIcon } from "../assets/images";
import { AuthInput } from "../components";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { checkPermission, signup } from "../api/auth";
import Swal from "sweetalert2";
import { useAuth } from "../contexts/AuthContext";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] =useState("")
  const navigate = useNavigate()
  const { isAuthenticated, signup } = useAuth();

  function handleAccountOnChange(event) {
    setUsername(event.target.value);
    console.log(username);
  }
  function handlePassWordOnChange(event) {
    setPassword(event.target.value);
    console.log(password);
  }

  function handleEmailOnChange(event){
    setEmail(event.target.value)
    console.log(email)
  }

  async function handleSignUpClick(){
    const success = await signup({ username, password, email });

    if (success) {
      Swal.fire({
        title: "註冊成功!",
        icon: "success",
        showConfirmButton: false,
        timer: 1000,
        position: "center",
      });
      return;
    } else {
      Swal.fire({
        title: "註冊失敗!",
        icon: "error",
        showConfirmButton: false,
        timer: 1000,
        position: "center",
      });
      setUsername(""); //清空輸入的內容
      setPassword(""); //清空輸入的內容
      setEmail(""); //清空輸入的內容
    }
  }

  useEffect(() => {
      if(isAuthenticated){
        navigate("/todo")
      } 
  },[navigate,isAuthenticated]);

  return (
    <AuthContainer>
      <div>
        <ACLogoIcon />
      </div>
      <h1>建立您的帳號</h1>

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
          label="Email"
          placeholder="請輸入Email"
          type="email"
          value={email}
          onChange={handleEmailOnChange}
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
        onClick={handleSignUpClick}>註冊</AuthButton>
      
      <Link to="/login">
        <AuthLinkText>
          取消
        </AuthLinkText>
      </Link>
    </AuthContainer>
  );
};

export default SignUpPage;
