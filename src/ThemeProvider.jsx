import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ThemeContext from "./ThemeContext";

// index.html sets data-theme before first paint; this keeps it in sync.
const getInitialIsDark = () =>
  document.documentElement.dataset.theme
    ? document.documentElement.dataset.theme === "dark"
    : window.matchMedia("(prefers-color-scheme: dark)").matches;

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(getInitialIsDark);

  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch (error) {
      console.error("Error saving theme preference:", error);
    }
  }, [isDark]);

  const handleToggleTheme = () => setIsDark((current) => !current);

  return (
    <ThemeContext.Provider value={{ isDark, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeProvider;
