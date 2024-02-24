import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";

function App() {
  const [color, setColor] = useState('teal');

  const randomColor = () => {
    let red = Math.random() * 255;
    let green = Math.random() * 255;
    let blue = Math.random() * 255;
    setColor(`rgb(${red}, ${green}, ${blue})`);
  };

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="px-2 fixed bottom-16 flex flex-wrap justify-center inset-x-0">
        <div className="flex justify-center flex-wrap gap-3 shadow-lg bg-zinc-300 p-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="button bg-red-400"
          >
            Red
          </button>
          <button onClick={() => setColor("green")} className="button bg-green-400">Green</button>
          <button onClick={() => setColor("blue")} className="button bg-blue-400">Blue</button>
          <button onClick={()=> randomColor()} className="button bg-violet-400">Random</button>
        </div>
      </div>
    </div>
  );
}

export default App;
