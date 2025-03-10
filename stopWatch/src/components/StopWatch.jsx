import React, { useState, useEffect, useRef } from "react";

function StopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {

    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);

      return () => {
        clearInterval(intervalIdRef.current);
      };
    }

  }, [isRunning]);

  const start = () => {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  };

  const stop = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setElapsedTime(0);
    setIsRunning(false);
  };

  const formatTime = () => {

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / (1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <div className="w-full min-h-screen bg-gray-600 flex justify-center items-center">
      <div className="bg-white px-4 py-2 w-[20rem] rounded flex flex-col justify-center items-center gap-2">
        <div className="text-4xl font-semibold p-2 text-center">
          {formatTime()}
        </div>
        <div className="flex justify-center items-center">
          <button
            className="bg-teal-400 rounded text-white px-2 py-1 m-1 shadow"
            onClick={start}
          >
            Start
          </button>
          <button
            className="bg-red-400 rounded text-white px-2 py-1 m-1 shadow"
            onClick={stop}
          >
            Stop
          </button>
          <button
            className="bg-blue-400 rounded text-white px-2 py-1 m-1 shadow"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default StopWatch;
