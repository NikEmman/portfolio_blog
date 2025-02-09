import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Footer = ({ isDark }) => {
  return (
    <footer>
      <p>&copy; 2025 Nikos Emmanouilidis</p>
      <Link to="https://www.linkedin.com/in/nikos-emmanouilidis-5a6232296/">
        <img
          src={isDark ? "linkedin-dark.svg" : "linkedin-light.svg"}
          alt="LinkedIn profile"
        />
      </Link>
      <Link to="https://github.com/NikEmman">
        <img
          src={isDark ? "github-mark-white.svg" : "github-mark.svg"}
          alt="github profile"
        />
      </Link>
    </footer>
  );
};

export default Footer;

Footer.propTypes = {
  isDark: PropTypes.bool,
};
