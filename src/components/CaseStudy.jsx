import PropTypes from "prop-types";
import Emphasis from "./Emphasis";
import ExternalLinks from "./ExternalLinks";
import TagList from "./TagList";
import "./CaseStudy.css";

const CaseStudy = ({ study }) => {
  return (
    <article className="case-study" id={study.id}>
      <div className="case-meta">
        <p className="case-kicker">{study.kicker}</p>
        <h3>{study.title}</h3>
        <p className="case-context">{study.context}</p>
        <TagList tags={study.stack} label={`${study.title} tech stack`} />
        <ExternalLinks links={study.links} />
      </div>
      <div className="case-body">
        {study.image && (
          <img
            className="case-image"
            src={study.image.src}
            alt={study.image.alt}
            loading="lazy"
          />
        )}
        <ul className="case-points">
          {study.points.map((point) => (
            <li key={point}>
              <Emphasis text={point} />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

CaseStudy.propTypes = {
  study: PropTypes.shape({
    id: PropTypes.string,
    kicker: PropTypes.string,
    title: PropTypes.string,
    context: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
    stack: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.shape({ src: PropTypes.string, alt: PropTypes.string }),
    links: PropTypes.array,
  }).isRequired,
};

export default CaseStudy;
