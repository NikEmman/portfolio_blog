import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="mailto:nik.s.emman@gmail.com">Contact me</Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
