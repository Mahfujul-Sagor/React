import {Link} from 'react-router-dom';

function ErrorPage() {
  return (
    <div className="w-full min-h-screen bg-zinc-700 flex justify-center items-center">
      <div className="text-white flex flex-col justify-center items-center gap-4">
        <h1 className="text-4xl font-semibold">Oops! 😵</h1>
        <p>Looks like something is not quite right ❌</p>
        <Link
          to="/"
          className="bg-teal-400 px-2 py-1 text-white font-semibold rounded"
        >
          Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;