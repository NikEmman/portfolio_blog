import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import PropTypes from "prop-types";
import ThemeContext from "./ThemeContext";

const STORAGE_KEY = "theme";
const root = document.documentElement;
const systemDark = window.matchMedia("(prefers-color-scheme: dark)");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const readSavedTheme = () => {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
};

const saveTheme = (theme) => {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch (error) {
    console.error("Error saving theme preference:", error);
  }
};

// index.html sets data-theme before first paint; start from whatever it chose.
const getInitialIsDark = () =>
  root.dataset.theme ? root.dataset.theme === "dark" : systemDark.matches;

// Where the reveal circle starts: the toggle's centre, or the screen centre.
const getRevealOrigin = (event) => {
  const rect = event?.currentTarget?.getBoundingClientRect?.();
  if (!rect) return { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
};

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(getInitialIsDark);

  // Follow the OS setting until the visitor picks a theme themselves.
  useEffect(() => {
    const handleSystemChange = (event) => {
      if (readSavedTheme()) return;
      root.dataset.theme = event.matches ? "dark" : "light";
      setIsDark(event.matches);
    };
    systemDark.addEventListener("change", handleSystemChange);
    return () => systemDark.removeEventListener("change", handleSystemChange);
  }, []);

  const handleToggleTheme = (event) => {
    const nextIsDark = !isDark;
    const nextTheme = nextIsDark ? "dark" : "light";
    saveTheme(nextTheme);

    const applyTheme = () => {
      root.dataset.theme = nextTheme;
      flushSync(() => setIsDark(nextIsDark));
    };

    if (reducedMotion.matches) {
      applyTheme();
      return;
    }

    // Fallback for browsers without View Transitions: fade the colours.
    if (!document.startViewTransition) {
      root.classList.add("theme-fade");
      applyTheme();
      window.setTimeout(() => root.classList.remove("theme-fade"), 400);
      return;
    }

    // Snapshot the page, swap the theme, then reveal the new one as a
    // circle growing out of the toggle.
    const { x, y } = getRevealOrigin(event);
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    root.classList.add("theme-switching");
    const transition = document.startViewTransition(applyTheme);

    transition.ready
      .then(() => {
        root.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${radius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 550,
            easing: "cubic-bezier(0.4, 0, 0.2, 1)",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      })
      .catch(() => {});

    transition.finished.finally(() =>
      root.classList.remove("theme-switching")
    );
  };

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
