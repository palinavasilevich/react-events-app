import { MainNavigation } from "../components";

function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An error occurred!</h1>
        <p>Sorry, we could't find the page you're looking for.</p>
      </main>
    </>
  );
}

export default ErrorPage;
