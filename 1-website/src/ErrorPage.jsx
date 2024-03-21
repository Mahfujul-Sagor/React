import { useRouteError, Link} from 'react-router-dom';

function ErrorPage() {

  const error = useRouteError();

  return (
    <div className="w-full min-h-screen bg-zinc-700 text-white text-4xl font-semibold flex flex-col gap-4 justify-center items-center">
      <h1>Oops! Looks Like You Are Lost 😵</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link className='bg-teal-400 rounded px-2 py-1 text-2xl' to="/">Go Back To Home</Link>
    </div>
  );
}

export default ErrorPage;