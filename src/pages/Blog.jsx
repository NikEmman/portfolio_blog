import { useEffect } from "react";
import { Link } from "react-router-dom";
import PostTitle from "../components/PostTitle";
import posts from "../content/posts";
import site from "../content/site";
import "./Blog.css";

const Blog = () => {
  useEffect(() => {
    document.title = `Writing | ${site.name}`;
  }, []);

  return (
    <main id="main" className="page">
      <div className="container container-narrow">
        <p className="eyebrow">Writing</p>
        <h1 className="page-title">Notes from learning to code</h1>
        <p className="page-intro">
          Short posts from my Odin Project years, written while going from
          police paperwork to shipping software.
        </p>
        <ol className="post-list">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link to={`/blog/${post.slug}`} className="post-link">
                <time>{post.date}</time>
                <h2>
                  <PostTitle title={post.title} />
                </h2>
                {post.excerpt && <p>{post.excerpt}</p>}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
};

export default Blog;
