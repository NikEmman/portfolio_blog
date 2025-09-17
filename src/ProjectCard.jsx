import PropTypes from "prop-types";
import ProjectCardDetailed from "./ProjectCardDetailed";
import { useState } from "react";
import "./ProjectCard.css";
import { createPortal } from "react-dom";

const ProjectCard = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="card closed" onClick={() => setIsOpen(true)}>
        <h3>{project.title}</h3>
        <img src={project.imgUrl} alt={project.title} />

        <p>{project.description}</p>
      </div>
      {isOpen &&
        createPortal(
          <ProjectCardDetailed
            key={project.title}
            project={project}
            handleIsOpen={handleIsOpen}
          />,
          document.body
        )}
    </>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object,
};

export default ProjectCard;
