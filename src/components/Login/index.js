import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginLogo from "../../assets/logos/mainlogo.png";
import "./index.css";

function Login() {
  const [eMail, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const navigate = useNavigate();

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassWord(event.target.value);
  };

  const submitForm = async (event) => {
    event.preventDefault();
    if (
      eMail === "venkateshbitla2023@gmail.com" &&
      passWord === "venkateshbitla2023"
    ) {
      navigate("/dashboard");
    } else {
      console.log("Authentication failed");
    }
  };

  return (
    <div className="login-cont">
      <img className="login-logo" alt="Login Logo" src={loginLogo} />
      <p className="login-text">We are Electric</p>
      <div>
        <form className="login-form" onSubmit={submitForm}>
          <input
            className="email-input"
            id="emailInput"
            type="email"
            placeholder="E-mail"
            value={eMail}
            onChange={onChangeEmail}
          />

          <input
            className="password-input"
            id="passwordInput"
            type="password"
            placeholder="Password"
            value={passWord}
            onChange={onChangePassword}
          />

          <button className="login-button" type="submit">
            Login
          </button>
        </form>
      </div>
      <p className="forgot-text">Forgot Password?</p>
    </div>
  );
}

export default Login;
