import Icon from "./Icon";
import site from "../content/site";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          &copy; {new Date().getFullYear()} {site.fullName}
        </p>
        <ul className="footer-links">
          <li>
            <a href={`mailto:${site.email}`} aria-label="Email">
              <Icon name="mail" />
            </a>
          </li>
          <li>
            <a href={site.github} target="_blank" rel="noopener" aria-label="GitHub">
              <Icon name="github" />
            </a>
          </li>
          <li>
            <a href={site.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn">
              <Icon name="linkedin" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
