// USEREF - used when we want to access DOM elements directly instead of React controlled functions
// Instead of using ONCHANGE - event.target.value

import { useRef } from "react";

export const RefExample = () => {
  // Simply create variable using useRef and provide initial value

  const inputRef = useRef(null);

  const handleClick = () => {
    console.log(inputRef); // REF object
    console.log(inputRef.current); // returns current pointing REF
    console.log(inputRef.current.value); // returns value of REF
  };

  return (
    <div>
      <h2>Himanshu</h2>

      {/* REF - can be used for HTML tags */}
      <input type="text" placeholder="Type something..." ref={inputRef} />
      <button onClick={handleClick}>Change Name</button>
      <button
        onClick={() => {
          // Access REF using current
          // focus() - puts the input field in focus

          inputRef.current.focus();
        }}
      >
        Focus input
      </button>
      <button
        onClick={() => {
          // To set the input value to blank

          inputRef.current.value = "";
        }}
      >
        Clear input
      </button>
    </div>
  );
};
