import React from "react";
// import "./Register.scss";
import { Link } from "react-router-dom";
import registerVideo from "../../assets/consulting_vid2.mp4";
import logo from "../../assets/logo.png";

import { FaUserShield } from "react-icons/fa";
import { BsShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";

const Register = () => {
  return (
    <div className="registerPage flex">
      <div className="container flex">
        <div className="videoContainer">
          <video src={registerVideo} autoPlay muted loop></video>
          <div className="textContainer">
            <h2 className="title">Unlocking Potential, Building Success</h2>
            <p>Where Expertise Meets Excellence in Manpower Solutions.</p>
          </div>
          <div className="footerContainer flex">
            <span className="text">Already have an account?</span>
            <Link to="/">
              <button className="btn">Login</button>
            </Link>
          </div>
        </div>
        <div className="formContainer flex">
          <div className="headerContainer">
            <img src={logo} alt="logo" />
            <h3>Fill in your details</h3>
          </div>

          <form action="" className="form grid">
            <div className="inputContainer">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <MdAlternateEmail className="icon" />
                <input type="email" id="email" placeholder="Enter Email" />
              </div>
            </div>

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
              <span>Register</span>
              <AiOutlineSwapRight className="icon" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
