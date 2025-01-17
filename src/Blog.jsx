import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "highlight.js/styles/github.css";
import hljs from "highlight.js";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/_posts/index.txt");
        const text = await response.text();
        const fileNames = text.trim().split("\n");

        const postPromises = fileNames.map(async (fileName) => {
          const postResponse = await fetch(`/_posts/${fileName}`);
          const content = await postResponse.text();
          return { fileName, content };
        });

        const postContents = await Promise.all(postPromises);
        setPosts(postContents);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading posts...</div>;
  }

  return (
    <div className="blog-container">
      <h1>Welcome to My Blog</h1>
      <Link to="/">Back to Portfolio</Link>
      <div className="posts">
        {posts.map(({ fileName, content }) => (
          <article key={fileName} className="post">
            <ReactMarkdown>{content}</ReactMarkdown>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
