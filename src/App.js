import { Routes, Route } from "react-router-dom";
import { NavbarMenu } from "./components/NavbarMenu";

import { Home } from "./components/home/Home";
import { Asteroids } from "./components/asteroids/Asteroids";
import { Basket } from "./components/baskets/Basket";
import { Hooks } from "./components/hooks/Hooks";
import { Stocks } from "./components/stocks/Stocks";

function App() {
  return (
    <div>
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/asteroids" element={<Asteroids />}></Route>
        <Route path="/baskets" element={<Basket />}></Route>
        <Route path="/hooks" element={<Hooks />}></Route>
        <Route path="/stocks" element={<Stocks />}></Route>
      </Routes>
    </div>
  );
}

export default App;
