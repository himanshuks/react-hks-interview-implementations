import { Routes, Route } from "react-router-dom";
import { NavbarMenu } from "./containers/NavbarMenu";

import { Stocks } from "./containers/Stocks";

function App() {
  return (
    <div>
      <NavbarMenu />
      <Routes>
        <Route path="/stocks" element={<Stocks />}></Route>
      </Routes>
    </div>
  );
}

export default App;
