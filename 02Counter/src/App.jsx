import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 2);
  };
  const removeCount = () => {
    setCount(count - 2);
    count <= 0 ? setCount(count) : removeCount();
  };

  return (
    <>
      <h1>Hello World!</h1>
      <h1>{count}</h1>
      <h1>This is my second react file ever!</h1>
      <p>I am learning react now</p>
      <button onClick={addCount}>Increase Value</button>{' '}
      <button onClick={removeCount}>Decrease Value</button>
      <p>footer: {count}</p>
    </>
  );
}

export default App;
