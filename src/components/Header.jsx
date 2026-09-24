import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "./Icon";
import useTheme from "../useTheme";
import site from "../content/site";
import "./Header.css";

const navItems = [
  { label: "Work", to: "/#work" },
  { label: "Projects", to: "/#projects" },
  { label: "About", to: "/#about" },
  { label: "Writing", to: "/blog" },
];

const Header = () => {
  const { isDark, handleToggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasToggledTheme, setHasToggledTheme] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleToggleMenu = () => setIsMenuOpen((current) => !current);

  const handleThemeClick = (event) => {
    setHasToggledTheme(true);
    handleToggleTheme(event);
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="wordmark" aria-label={`${site.name}, home`}>
          <span className="wordmark-mark" aria-hidden="true">
            NE
          </span>
          <span className="wordmark-name">{site.name}</span>
        </Link>

        <nav
          id="site-nav"
          className={`site-nav${isMenuOpen ? " is-open" : ""}`}
          aria-label="Main"
        >
          <ul>
            {navItems.map((item) => (
              <li key={item.label}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="icon-button"
            onClick={handleThemeClick}
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
          >
            <span
              key={isDark ? "sun" : "moon"}
              className={`theme-icon${hasToggledTheme ? " is-animated" : ""}`}
            >
              <Icon name={isDark ? "sun" : "moon"} />
            </span>
          </button>
          <Link className="button button-small" to="/#contact">
            Contact
          </Link>
          <button
            type="button"
            className="icon-button menu-button"
            onClick={handleToggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="site-nav"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <Icon name={isMenuOpen ? "close" : "menu"} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
