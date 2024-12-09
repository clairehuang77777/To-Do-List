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
      <AuthButton>登入</AuthButton>
      <Link to="/signup">
        <AuthLinkText>註冊</AuthLinkText>
      </Link>
    </AuthContainer>
  );
};

export default LoginPage;
