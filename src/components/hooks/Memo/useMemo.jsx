// USEMEMO - mainly used to avoid unnecessary function computations at each render
// What happens is when a state variable gets changed, render happens
// while doing so, it will re-create the function in memory
// if function has intensive heavy calculation, it creates unnecessary load
// useMemo - used for performance optimization

import axios from "axios";
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const MemoExample = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => setData(res.data));
  }, []);

  // Below function will get recomputed at every render

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";

    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log("Largest name computation completed...");
    return longestName;
  };

  // Create a variable using useMemo
  // Takes 2 parameters - function definition and dependent array
  // 1st - Pass function which you want to get executed only on certain conditions
  // 2nd - Pass list of state variables based on which useMemo will get called

  // when used returns a value by executing a function

  const getLongestName = useMemo(() => findLongestName(data), [data]);

  return (
    <div>
      <label>Longest Name</label>
      <br></br>

      {/* As we are calling this function in render part, this function will executed at each render */}
      {getLongestName}
      <br></br>

      <button onClick={() => setToggle(!toggle)}>Toggle Me</button>
      {toggle && <h2>Toggle Word</h2>}
    </div>
  );
};
