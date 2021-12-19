import { Routes, Route } from "react-router-dom";
import { NavbarMenu } from "./containers/NavbarMenu";

import { Home } from "./containers/Home";
import { Stocks } from "./containers/Stocks";

function App() {
  return (
    <div>
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/stocks" element={<Stocks />}></Route>
      </Routes>
    </div>
  );
}

export default App;
