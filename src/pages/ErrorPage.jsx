import { Link } from "react-router-dom";
import "./Blog.css";

const ErrorPage = () => {
  return (
    <main id="main" className="page error-page">
      <div className="container container-narrow">
        <p className="eyebrow">404</p>
        <h1 className="page-title">This page doesn&apos;t exist.</h1>
        <p className="page-intro">
          The link may be old, or the page has moved during the redesign.
        </p>
        <Link to="/" className="button">
          Back to the homepage
        </Link>
      </div>
    </main>
  );
};

export default ErrorPage;
