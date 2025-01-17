import PropTypes from "prop-types";

const Project = ({ imageUrl, article, tech, title }) => {
  const techStack = tech.map((item) => {
    <p key={item}>{item}</p>;
  });
  return (
    <div className="cardContainer">
      <h3>{title}</h3>
      <img src={imageUrl} alt={title + " photo"} />
      <article>{article}</article>
      <div className="techStack">{techStack}</div>
    </div>
  );
};

Project.propTypes = {
  imageUrl: PropTypes.string,
  article: PropTypes.string,
  tech: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
};

export default Project;
