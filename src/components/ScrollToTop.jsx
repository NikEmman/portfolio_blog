import { useEffect, useState } from "react";
import Icon from "./Icon";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <button
      type="button"
      className={`scroll-top${isVisible ? " is-visible" : ""}`}
      onClick={handleClick}
      aria-label="Scroll back to top"
      tabIndex={isVisible ? 0 : -1}
      aria-hidden={isVisible ? undefined : "true"}
    >
      <Icon name="arrowUp" size={20} />
    </button>
  );
};

export default ScrollToTop;
