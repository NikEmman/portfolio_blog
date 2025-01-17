import { useEffect, useState } from "react";
import Markdown from "marked-react";
import PropTypes from "prop-types";
const Post = ({ fileName }) => {
  const [markedownContent, setMarkedownContent] = useState("");

  useEffect(() => {
    fetch(`../_posts/${{ fileName }}`)
      .then((response) => response.text())
      .then((text) => setMarkedownContent(text));
  });

  return <Markdown>{markedownContent}</Markdown>;
};

Post.propTypes = {
  fileName: PropTypes.string,
};
export default Post;
