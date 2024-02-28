import { useState } from "react";
import {Square} from "./components/index.js";

function App() {
  const [value, setValue] = useState(0);
  
  const clickHandler = () => {
    setValue('click');
  };


  return (
    <div className="w-full min-h-screen bg-gray-600 flex justify-center items-center">
      <div className="w-1/3 bg-white">
        <div className="board-row">
          <Square value={value} onclick={clickHandler} />
          <Square />
          <Square />
        </div>

        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>

        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    </div>
  );
}

export default App;
