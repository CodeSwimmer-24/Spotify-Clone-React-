import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";
function Login() {
  return (
    <div className="login">
      <img src="https://www.ana-gracey.co.uk/wp-content/uploads/2016/05/spotify-logo-png-7055-1.png" />

      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
