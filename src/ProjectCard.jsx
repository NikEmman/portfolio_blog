import PropTypes from "prop-types";
import "./ProjectCard.css";
const ProjectCard = ({ project }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="back">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>Tech: {project.tech}</p>
          <div className="links">
            {project.live && (
              <a href="https://deluxe-pastelito-751e93.netlify.app/">Live</a>
            )}
            <a href={project.github}>GitHub</a>
          </div>
        </div>
        <img className="front" src={project.imgUrl} alt={project.title}></img>
      </div>
    </div>
  );
};
ProjectCard.propTypes = {
  project: PropTypes.object,
};
export default ProjectCard;
