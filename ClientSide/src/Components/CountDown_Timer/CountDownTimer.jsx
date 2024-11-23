import React, { useState, useEffect } from "react";

function CountDownTimer({ duration }) {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  const formatTimer = (millisecons) => {
    const totel_seconds = parseInt(Math.floor(millisecons / 1000));
    const totel_miutes = parseInt(Math.floor(totel_seconds / 60));
    const totel_hours = parseInt(Math.floor(totel_miutes / 60));
    const days = parseInt(Math.floor(totel_hours / 24));

    const seconds = parseInt(totel_seconds % 60);
    const minutes = parseInt(totel_miutes % 60);
    const hours = parseInt(totel_hours % 24);

    return `${days}  : ${hours} : ${minutes} : ${seconds}`;
  };
  return (
    <>
      <div className="text-lg md:text-2xl lg:text-4xl font-bold ">{formatTimer(time)}</div>
    </>
  );
}

export default CountDownTimer;
