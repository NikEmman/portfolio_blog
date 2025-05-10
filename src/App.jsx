import "./App.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router";
import { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";

function App() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useState(preference);
  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <NavBar />
      <ThemeSwitch isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      <Outlet />

      <Footer isDark={isDark} />
    </div>
  );
}

export default App;
