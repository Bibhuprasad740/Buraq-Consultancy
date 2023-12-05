import React, { useState } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import loginVideo from "../../assets/consulting_vid1.mp4";
import logo from "../../assets/logo.png";

import { FaUserShield } from "react-icons/fa";
import { BsShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../backend/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigator = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function emailChangeHandler(event) {
    setEmail(event.target.value);
  }

  function passwordChangeHandler(event) {
    setPassword(event.target.value);
  }

  async function loginHandler(event) {
    event.preventDefault();
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredentials);
      navigator("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  }
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

          <form action="" className="form grid" onSubmit={loginHandler}>
            <div className="inputContainer">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input
                  onChange={emailChangeHandler}
                  type="text"
                  id="email"
                  placeholder="Enter Email"
                  value={email}
                />
              </div>
            </div>
            <div className="inputContainer">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsShieldLockFill className="icon" />
                <input
                  onChange={passwordChangeHandler}
                  type="password"
                  id="username"
                  placeholder="Enter Password"
                  value={password}
                />
              </div>
            </div>

            <button type="submit" className="btn flex">
              <span>Login</span>
              <AiOutlineSwapRight className="icon" />
            </button>

            <span className="forgotPassword">
              {" "}
              <a href="##">Forgot Password?</a>{" "}
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
