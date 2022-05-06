// USECONTEXT - used to access to context object created inside the React project

import { useContext } from "react";
import { AppContext } from "./useContext";

export const User = () => {
  // Import the context object and extract useful values using destructuring

  const { userName } = useContext(AppContext);

  // userName variable is extracted from context object

  return (
    <div>
      <h2>User: {userName}</h2>
    </div>
  );
};
