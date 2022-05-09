// USECONTEXT - used to access to context object created inside the React project

import { useContext } from "react";
import { AppContext } from "./useContext";

export const Login = () => {
  // Import the context object and extract useful values using destructuring

  const { setUserName } = useContext(AppContext);

  // setUserName function is extracted from context object

  return (
    <div>
      <input
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
    </div>
  );
};
