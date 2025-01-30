import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "highlight.js/styles/vs2015.css";
import hljs from "highlight.js";
import ruby from "highlight.js/lib/languages/ruby";
import javascript from "highlight.js/lib/languages/javascript";
import "./Blog.css";

hljs.registerLanguage("ruby", ruby);
hljs.registerLanguage("javascript", javascript);

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const highlightCode = () => {
      document.querySelectorAll("pre code").forEach((block) => {
        hljs.highlightElement(block);
      });
    };

    highlightCode();
  }, [posts]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/posts/index.txt");
        const text = await response.text();
        const fileNames = text.trim().split("\n").reverse();
        const postPromises = fileNames.map(async (fileName) => {
          const postResponse = await fetch(`/posts/${fileName}`);
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
    return <div className="posts">Loading posts...</div>;
  }

  return (
    <div className="blog-container">
      <h1>Welcome to My Blog</h1>

      <div className="posts">
        {posts.map(({ fileName, content }) => (
          <article key={fileName} className="post">
            <ReactMarkdown
              components={{
                code: ({ inline, className, children, ...props }) => {
                  const match = /language-(\w+)/.exec(className || "");
                  const language = match ? match[1] : "";
                  return !inline && language ? (
                    <pre>
                      <code className={className} {...props}>
                        {children}
                      </code>
                    </pre>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {content}
            </ReactMarkdown>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
