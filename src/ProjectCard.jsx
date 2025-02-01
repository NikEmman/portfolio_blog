import PropTypes from "prop-types";
import { useState } from "react";
import "./ProjectCard.css";
const ProjectCard = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={isOpen ? "card open" : "card"}
      onClick={() => setIsOpen(!isOpen)}
    >
      <h3>{project.title}</h3>
      <img src={project.imgUrl} alt={project.title}></img>
      {!isOpen ? (
        <p>{project.description}</p>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};
ProjectCard.propTypes = {
  project: PropTypes.object,
};
export default ProjectCard;
