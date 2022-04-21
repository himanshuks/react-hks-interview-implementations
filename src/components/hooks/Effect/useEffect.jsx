// USEEFFECT - called after render gets completed (when state variables get changed)
// This can be the first render like componentDidMount and subsequent render like componentDidUpdate

import { useEffect, useState } from "react";
import axios from "axios";

export const EffectExample = () => {
  const [email, setEmail] = useState("");

  // 1st parameter - function definition
  // 2nd parameter - array of those state variables based on only which useEffect will be called

  useEffect(() => {
    console.log("useEffect is called");

    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setEmail(response.data[0].email);
        console.log("API called");
      });
    //   });

    // If you don't provide [] as second argument, then USEEFFECT will be called 2 times
    // First time render, then after STATE value email gets changed

    // Below we have given empty [], so only one time this will get called
    // Else you can pass only those STATES which when gets changed USEEFFECT will get called
  }, []);

  return (
    <div>
      <h2>Use Effect is action ...!!!</h2>
      <h6>{email}</h6>
    </div>
  );
};
