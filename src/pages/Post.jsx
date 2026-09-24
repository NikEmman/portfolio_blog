import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import ruby from "highlight.js/lib/languages/ruby";
import Icon from "../components/Icon";
import PostTitle from "../components/PostTitle";
import posts, { findPost } from "../content/posts";
import site from "../content/site";
import ErrorPage from "./ErrorPage";
import "highlight.js/styles/github-dark.css";
import "./Blog.css";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("ruby", ruby);

const MarkdownLink = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener">
    {children}
  </a>
);

MarkdownLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
};

const markdownComponents = { a: MarkdownLink };

const Post = () => {
  const { slug } = useParams();
  const post = findPost(slug);

  useEffect(() => {
    if (!post) return;
    document.title = `${post.title.replace(/~~[^~]+~~\s*/g, "")} | ${site.name}`;
    document.querySelectorAll(".prose pre code").forEach((block) => {
      hljs.highlightElement(block);
    });
  }, [post]);

  if (!post) return <ErrorPage />;

  const index = posts.indexOf(post);
  const newer = posts[index - 1];
  const older = posts[index + 1];

  return (
    <main id="main" className="page">
      <article className="container container-narrow">
        <Link to="/blog" className="back-link">
          <Icon name="arrowLeft" size={16} /> All posts
        </Link>
        <header className="post-header">
          <time>{post.date}</time>
          <h1 className="page-title">
            <PostTitle title={post.title} />
          </h1>
        </header>
        <div className="prose">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
            {post.body}
          </ReactMarkdown>
        </div>
        <nav className="post-nav" aria-label="More posts">
          {older ? (
            <Link to={`/blog/${older.slug}`}>
              <span>Previous</span>
              <PostTitle title={older.title} />
            </Link>
          ) : (
            <span />
          )}
          {newer && (
            <Link to={`/blog/${newer.slug}`} className="post-nav-next">
              <span>Next</span>
              <PostTitle title={newer.title} />
            </Link>
          )}
        </nav>
      </article>
    </main>
  );
};

export default Post;
