import { Routes, Route } from "react-router-dom";
import { NavbarMenu } from "./containers/NavbarMenu";

import { Home } from "./containers/Home";
import { Asteroids } from "./containers/Asteroids";
import { Basket } from "./containers/Basket";
import { Stocks } from "./containers/Stocks";

function App() {
  return (
    <div>
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/asteroids" element={<Asteroids />}></Route>
        <Route path="/baskets" element={<Basket />}></Route>
        <Route path="/stocks" element={<Stocks />}></Route>
      </Routes>
    </div>
  );
}

export default App;
