import { Routes, Route } from "react-router-dom";
import { Stocks } from "./containers/Stocks";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/stocks" element={<Stocks />}></Route>
      </Routes>
    </div>
  );
}

export default App;
