import PropTypes from "prop-types";
import "./ProjectCard.css";
const ProjectCard = ({ project }) => {
  return (
    <div className="card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <img src={project.imgUrl} alt="" />
      <a href={project.github}>GitHub</a>
    </div>
  );
};
ProjectCard.propTypes = {
  project: PropTypes.object,
};
export default ProjectCard;
