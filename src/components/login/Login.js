import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import loginVideo from "../../assets/consulting_vid1.mp4";
import logo from "../../assets/logo.png";

import { FaUserShield } from "react-icons/fa";
import { BsShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

const Login = () => {
  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="videoContainer">
          <video src={loginVideo} autoPlay muted loop></video>
          <div className="textContainer">
            <h2 className="title">
              Empowering Success Through Tailor-Made Manpower Solutions
            </h2>
            <p>Your Trusted Partner in Human Resources Excellence.</p>
          </div>
          <div className="footerContainer flex">
            <span className="text">Don't have account?</span>
            <Link to="/register">
              <button className="btn">Sign Up</button>
            </Link>
          </div>
        </div>
        <div className="formContainer flex">
          <div className="headerContainer">
            <img src={logo} alt="logo" />
            <h3>Welcome back</h3>
          </div>

          <form action="" className="form grid">
            <span className="showMessage">Enter Your Details to Login</span>
            <div className="inputContainer">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input type="text" id="username" placeholder="Enter Username" />
              </div>
            </div>
            <div className="inputContainer">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsShieldLockFill className="icon" />
                <input type="text" id="username" placeholder="Enter Password" />
              </div>
            </div>

            <button type="submit" className="btn flex">
              <span>Login</span>
              <AiOutlineSwapRight className="icon" />
            </button>

            <span className="forgotPassword">
              {" "}
              <a href="#">Forgot Password?</a>{" "}
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
