import PropTypes from "prop-types";

const SectionHeading = ({ index, eyebrow, title, intro }) => {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        <span className="eyebrow-index">{index}</span> {eyebrow}
      </p>
      <h2>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  );
};

SectionHeading.propTypes = {
  index: PropTypes.string.isRequired,
  eyebrow: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  intro: PropTypes.string,
};

export default SectionHeading;
