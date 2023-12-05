import React from "react";
import "./Dashboard.css";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../backend/auth";

const Dashboard = () => {
  const navigator = useNavigate();
  function logoutHandler() {
    signOut(auth);
    navigator("/");
  }
  return (
    <div>
      This is Dashboard
      <br />
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default Dashboard;
