import { NavLink, Route, Routes } from "react-router-dom";
import { Coffees } from "./components/coffees/Coffees";
import { Count } from "./components/count/Count";
import './App.css'
import { Todo } from "./components/todo/Todo";
import { Cars } from "./components/cars/Cars";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <NavLink to='/'>Coffees</NavLink>
        <NavLink to='/count'>Count</NavLink>
        <NavLink to='/todo'>Todo</NavLink>
        <NavLink to='/cars'>Cars</NavLink>
      </nav>
      <Routes>
        <Route path="" element={<Coffees/>} />
        <Route path="count" element={<Count />} />
        <Route path="todo" element={<Todo />} />
        <Route path="cars" element={<Cars/>} />
      </Routes>
    </div>
  );
}
export default App;