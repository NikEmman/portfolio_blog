import PropTypes from "prop-types";
import ExternalLinks from "./ExternalLinks";
import TagList from "./TagList";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <article className="project-card">
      {project.image ? (
        <div className="project-media">
          <img src={project.image.src} alt={project.image.alt} loading="lazy" />
        </div>
      ) : (
        <div className="project-media project-media-empty" aria-hidden="true">
          <span>{"</>"}</span>
        </div>
      )}
      <div className="project-body">
        <p className="project-subtitle">{project.subtitle}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <TagList tags={project.tech} label={`${project.title} tech`} />
        <ExternalLinks links={project.links} />
      </div>
    </article>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    tech: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.shape({ src: PropTypes.string, alt: PropTypes.string }),
    links: PropTypes.array,
  }).isRequired,
};

export default ProjectCard;
