import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import auth from "../../backend/auth";
import Dashboard from "../dashboard/Dashboard";

const Home = () => {
  const [existingUser, setExistingUser] = useState(null);
  useEffect(() => {
    const authStateChecker = onAuthStateChanged(auth, (user) => {
      if (user) {
        setExistingUser(user);
      } else {
        setExistingUser(null);
      }
    });

    return () => {
      authStateChecker();
    };
  }, []);
  return <div>{existingUser ? <Dashboard /> : <p>This is home!</p>}</div>;
};

export default Home;
