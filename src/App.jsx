import { NavLink, Route, Routes } from "react-router-dom";
import { Coffees } from "./components/coffees/Coffees";
import { Count } from "./components/count/Count";
import './App.css'
import { CRUD } from "./components/crud/CRUD";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <NavLink to='/'>Coffees</NavLink>
        <NavLink to='/count'>Count</NavLink>
        <NavLink to='/crud'>CRUD</NavLink>
      </nav>
      <Routes>
        <Route path="" element={<Coffees/>} />
        <Route path="count" element={<Count />} />
        <Route path="crud" element={<CRUD />} />
      </Routes>
    </div>
  );
}
export default App;