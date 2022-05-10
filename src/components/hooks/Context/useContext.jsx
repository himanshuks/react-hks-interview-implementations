// USECONTEXT - used to maintain global level variables and access them across different components
// It prevents prop drilling

import { useState } from "react";
import { createContext } from "react";
import { Login } from "./Login";
import { User } from "./User";

// createContext - can be used to create an context object with initial value

export const AppContext = createContext(null);

export const ContextExample = () => {
  const [userName, setUserName] = useState("");

  // Wrap the context object around required components like NAME.PROVIDER
  // Pass the VALUE parameter - with list of items to be shared by child components

  return (
    <AppContext.Provider value={{ userName, setUserName }}>
      <Login />
      <User />
    </AppContext.Provider>
  );
};
