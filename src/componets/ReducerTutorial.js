import React, { useState } from "react";

// TODO: we need to change the following logic to useReducer
const ReducerTutorial = () => {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(true);

  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
          setShowText(!showText);
        }}
      >
        click
      </button>
      {showText && <p>this is an even number</p>}
    </div>
  );
};

export default ReducerTutorial;
