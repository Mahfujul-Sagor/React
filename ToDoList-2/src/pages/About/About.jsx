import reactLogo from "../../assets/react.svg";
import tailwindcssLogo from "../../assets/tailwindcssLogo.png";
import {Link} from 'react-router-dom';

function About() {
  return (
    <div className="min-h-screen bg-zinc-700 text-white flex flex-col gap-4 justify-center items-center">
      <h1 className="text-4xl font-semibold underline decoration-zinc-400 my-4">
        ToDoList
      </h1>
      <p className="font-semibold">
        Created with React&nbsp;
        <img src={reactLogo} alt="react logo" className="inline-block" />
        &nbsp;and Tailwindcss&nbsp;
        <img
          src={tailwindcssLogo}
          alt="tailwindcss logo"
          width="35.93"
          height="32"
          className="inline-block"
        />
      </p>
      <Link to='/' className="bg-teal-400 px-2 py-1 text-white font-semibold rounded">Home</Link>
    </div>
  );
}

export default About;
