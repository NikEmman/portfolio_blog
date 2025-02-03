import PropTypes from "prop-types";

const ProjectCardDetailed = ({ project, handleIsOpen }) => {
  return (
    <div className="card open">
      <button onClick={handleIsOpen}>X</button>
      <h3>{project.title}</h3>
      <img src={project.imgUrl} alt={project.title}></img>
      <p>{project.largeDescription}</p>
      <p>Tech: {project.tech}</p>
      <div className="links">
        {project.live && (
          <a
            href="https://deluxe-pastelito-751e93.netlify.app/"
            title="View it live"
          >
            Live
          </a>
        )}
        <a href={project.github} title="View the source code on GitHub">
          GitHub
        </a>
      </div>
    </div>
  );
};
ProjectCardDetailed.propTypes = {
  project: PropTypes.object,
  handleIsOpen: PropTypes.func,
};
export default ProjectCardDetailed;
