import PropTypes from "prop-types";
import Icon from "./Icon";

const ExternalLinks = ({ links }) => {
  if (!links.length) return null;

  return (
    <ul className="external-links">
      {links.map((link) => (
        <li key={link.href}>
          <a href={link.href} target="_blank" rel="noopener">
            {link.label}
            <Icon name="external" size={14} />
          </a>
        </li>
      ))}
    </ul>
  );
};

ExternalLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, href: PropTypes.string })
  ).isRequired,
};

export default ExternalLinks;
