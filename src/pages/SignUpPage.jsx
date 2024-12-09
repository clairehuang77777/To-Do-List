import {
  AuthContainer,
  AuthInputContainer,
  AuthButton,
  AuthLinkText,
} from "../components/common/auth.styled";
import { ACLogoIcon } from "../assets/images";
import { AuthInput } from "../components";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] =useState("")

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
      <AuthButton>註冊</AuthButton>
      
      <Link to="/login">
        <AuthLinkText>
          取消
        </AuthLinkText>
      </Link>
    </AuthContainer>
  );
};

export default SignUpPage;
