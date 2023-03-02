import logo from "./images/logo.png";
import React, { useState } from "react";
import { LoginPromise } from "./LoginPromise";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isRequesting, setIsRequesting] = useState(false);
  const [register, setRegister] = useState("");

  const handleEmail = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handlePassword = (event) => {
    const { value } = event.target;
    setPassword(value);
  };

  const handleRegister = (event) => {
    const { value } = event.target;
    setRegister(value);
    console.log("Sign up here.");
  };

  const handleSubmit = () => {
    console.log("submit");
    setError(null);
    setIsRequesting(true);

    let values = { email: email, password: password };
    LoginPromise(values)
      .then(() => {
        alert("Login efetuado com sucesso.");
        console.log("sucesso");
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      })
      .finally(() => setIsRequesting(false));
  };
  return (
    <div className="all">
      <div className="a">
        <img className="logo" src={logo} alt="logops" />
      </div>
      <div className="b">
        <div className="loginbox">
          <div className="logodiv">
            <img className="logobox" src={logo} alt="logo" />
          </div>
          <div className="errordiv">
            {error && <div className="errormessage">{error.message}</div>}
          </div>
          <div className="inputs">
            <input
              className="input"
              type={"text"}
              placeholder="E-MAIL"
              value={email}
              onChange={handleEmail}
            />

            <input
              className="input"
              type={"password"}
              value={password}
              onChange={handlePassword}
              placeholder="PASSWORD"
            />
          </div>
          <div className="divlogin">
            <button
              className="btn"
              onClick={handleSubmit}
              disabled={email === "" || password.length < 6 || isRequesting}
            >
              LOGIN
            </button>
          </div>
          <div className="acctext">
            <h3 className="text">Don't have an account?</h3>
          </div>
          <div className="divsignup">
            <button className="btn1" value={register} onClick={handleRegister}>
              SIGN UP HERE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
