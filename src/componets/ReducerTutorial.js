import React, { useState, useReducer } from "react";

export const ReducerTutorial0 = () => {
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

// we change the above logic to useReducer
export const ReducerTutorial1 = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENTAL":
        return { count: state.count + 1, showText: state.showText };
      case "TOGGLESHOWTEXT":
        return { count: state.count, showText: !state.showText };
      default:
        return state;
    }
  };
  const [state, patch] = useReducer(reducer, { count: 0, showText: true });
  return (
    <div>
      <p>{state.count}</p>
      <button
        onClick={() => {
          patch({ type: "INCREMENTAL" });
          patch({ type: "TOGGLESHOWTEXT" });
        }}
      >
        click
      </button>
      {state.showText && <p>this is an even number</p>}
    </div>
  );
};
