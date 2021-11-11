import { Link, Routes, Route } from "react-router-dom";
import { Stocks } from "./containers/Stocks";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/stocks">Stocks</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/stocks" element={<Stocks />}></Route>
      </Routes>
    </div>
  );
}

export default App;
