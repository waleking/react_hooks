import React, { useState } from "react";

const StateTutorial = () => {
  const [count, setCount] = useState(0);
  const handleClick = (e) => {
    setCount((count) => count + 1);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={handleClick}>increment</button>
    </>
  );
};

export default StateTutorial;
