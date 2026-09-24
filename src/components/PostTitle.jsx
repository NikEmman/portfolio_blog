import PropTypes from "prop-types";

// Post titles may use ~~strikethrough~~ markdown.
const PostTitle = ({ title }) =>
  title
    .split(/(~~[^~]+~~)/)
    .map((part, index) =>
      part.startsWith("~~") ? <del key={index}>{part.slice(2, -2)}</del> : part
    );

PostTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PostTitle;
