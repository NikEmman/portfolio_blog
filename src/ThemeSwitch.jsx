import "./ThemeSwitch.css";
import PropTypes from "prop-types";

const ThemeSwitch = ({ handleChange, isChecked }) => {
  return (
    <div className="switch-super-container">
      <div className="switch-container">
        <input
          type="checkbox"
          id="check"
          className="switch"
          onChange={handleChange}
          checked={isChecked}
        />
        <label htmlFor="check">Dark Mode</label>
      </div>
    </div>
  );
};
ThemeSwitch.propTypes = {
  handleChange: PropTypes.func,
  isChecked: PropTypes.bool,
};

export default ThemeSwitch;
