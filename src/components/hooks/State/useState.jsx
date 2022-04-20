// USESTATE - used to having state management in functional components

import { useState } from "react";

export const StateExample = () => {
  // let counter = 0;

  // Using normal variable will only make changes similar to javascript
  // To let React show these updates values, it should RE-RENDER the page
  // that's why USESTATE is used to create state variables in React

  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  const increment = () => {
    // counter = counter + 1;
    // We can't set state value like this

    setCounter(counter + 1);
    console.log("Counter increased");
  };

  const handleName = (event) => {
    // To set the name take the value from event and use function name created in USESTATE

    setName(event.target.value);
    console.log("Handle event called");
  };

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={increment}>Increment Counter</button>
      <br />
      <br></br>
      <input
        type="text"
        placeholder="Type something..."
        onChange={handleName}
      />
      <br></br>
      {name}
    </div>
  );
};
