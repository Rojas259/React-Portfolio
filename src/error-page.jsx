import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Wow</h1>
      <p>Sorry! Turn back from onces you came.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <br></br>
      <h3>¯\_(ツ)_/¯</h3>
    </div>
  );
}