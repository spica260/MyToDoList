import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-bg">
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Page not found.</p>
            <Link to={`/`} className="btn">Back to safety</Link>
        </div>
    </div>
  );
}