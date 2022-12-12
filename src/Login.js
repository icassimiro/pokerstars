import logo from "./images/logo.png";

const Login = () => {
  return (
    <div className="all">
      <div className="a">
        <img className="logo" src={logo} alt="logops" />
      </div>
      <div className="b">
        <div className="loginbox">
          <img className="logobox" src={logo} alt="logo" />

          <input className="input" type="text" placeholder="USERNAME" />

          <input className="input" type="password" placeholder="PASSWORD" />
          <button className="btn" onClick>
            LOGIN
          </button>
          <h3 className="text">Don't Have Account?</h3>
          <button className="btn1" onClick>
            SIGN UP HERE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
