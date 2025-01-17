import { Link } from "react-router-dom";
const Blog = () => {
  return (
    <>
      <h1>Welcome to My Blog</h1>
      <Link to="/">Back to Portfolio</Link>
      <div id="posts">Loading posts...</div>
    </>
  );
};
export default Blog;
