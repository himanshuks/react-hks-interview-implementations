// USEREDUCER - mainly used where multiple state variables needed to be updated inside single function
// It is almost similar to USESTATE hook

import { useReducer } from "react";

// Reducer function is created similar to store
// We pass state and action, and use SWITCH case to determine action type

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return { count: state.count + 1, showText: state.showText };
    case "TOGGLE_TEXT":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

export const ReducerExample = () => {
  // Similar to USESTATE, USEREDUCER return 2 values in tuple
  // List of variables STATE
  // Action to be performed on each variable DISPATCH

  // Take 2 arguments, REDUCER function and Object with initial values
  // Similar to STORE, create a reducer

  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  const handleClick = () => {
    // Instead of setting state individually, we DISPATCH the action type

    dispatch({ type: "INCREMENT_COUNTER" });
    dispatch({ type: "TOGGLE_TEXT" });
  };

  return (
    <div>
      <h2>{state.count}</h2>
      <button onClick={handleClick}>Click Me</button>
      {state.showText && <p>Hello world...</p>}
    </div>
  );
};
