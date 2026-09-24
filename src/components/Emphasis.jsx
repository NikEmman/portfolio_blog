import PropTypes from "prop-types";

// Renders **bold** spans from the plain-text content files.
const Emphasis = ({ text }) =>
  text
    .split(/(\*\*[^*]+\*\*)/)
    .map((part, index) =>
      part.startsWith("**") ? (
        <strong key={index}>{part.slice(2, -2)}</strong>
      ) : (
        part
      )
    );

Emphasis.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Emphasis;
