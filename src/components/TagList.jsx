import PropTypes from "prop-types";

const TagList = ({ tags, label }) => {
  return (
    <ul className="tag-list" aria-label={label}>
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
};

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string,
};

export default TagList;
