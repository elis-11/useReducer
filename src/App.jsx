import { NavLink, Route, Routes } from "react-router-dom";
import { Coffees } from "./components/coffees/Coffees";
import { Count } from "./components/count/Count";
import './App.css'

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <NavLink to='/'>Coffees</NavLink>
        <NavLink to='/count'>Count</NavLink>
      </nav>
      <Routes>
        <Route path="" element={<Coffees/>} />
        <Route path="count" element={<Count />} />
      </Routes>
    </div>
  );
}
export default App;