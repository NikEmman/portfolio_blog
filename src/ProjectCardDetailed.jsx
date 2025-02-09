import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import "./ProjectCardDetailed.css";

const ProjectCardDetailed = ({ project, handleIsOpen }) => {
  const [isShowing, setIsShowing] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsShowing(true), 100);
  });
  return (
    <div className={"card open " + (isShowing && "show")}>
      <button onClick={handleIsOpen}>X</button>
      <h3>{project.title}</h3>
      <img src={project.imgUrl} alt={project.title}></img>
      <p>{project.largeDescription}</p>
      <p className="tech-stack">Tech: {project.tech}</p>
      <div className="links">
        {project.live && (
          <a href={project.live} title="View it live">
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
