import "./App.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router";
import { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import ThemeContext from "./ThemeContext";

function App() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useState(preference);
  return (
    <ThemeContext.Provider value={{ isDark }}>
      <div className="App" data-theme={isDark ? "dark" : "light"}>
        <NavBar />
        <ThemeSwitch
          isChecked={isDark}
          handleChange={() => setIsDark(!isDark)}
        />
        <Outlet />

        <Footer isDark={isDark} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
