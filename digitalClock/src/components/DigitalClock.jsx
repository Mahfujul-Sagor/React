import React, { useState, useEffect } from "react";

function DigitalClock() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formatTime = () => {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    const meridiem = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;

    return `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)} ${meridiem}`;
  };

  const padNumber = (number) => {
    return (number < 10 ? '0' : '') + number;
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-600 via-teal-600 to-gray-600 flex justify-center items-center">
      <div className="px-4 py-2 text-center">
        <span className="text-white text-6xl font-semibold">{formatTime()}</span>
      </div>
    </div>
  );
}

export default DigitalClock;
