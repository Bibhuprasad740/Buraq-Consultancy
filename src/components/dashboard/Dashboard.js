import Home from "../../pages/home/Home";
import "../../style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

function Dashboard() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Home />
    </div>
  );
}

export default Dashboard;
