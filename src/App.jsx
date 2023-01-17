import { NavLink, Route, Routes } from "react-router-dom";
import { Coffees } from "./components/coffees/Coffees";
import { Count } from "./components/count/Count";
import "./App.scss";
import { Todo } from "./components/todo/Todo";
import { Cars } from "./components/cars/Cars";
import { Card } from "./components/card/Card";
import { CarsNew } from "./components/carsnew/CarsNew";
import { Movies } from "./components/movies/Movies";
import { Items } from "./components/items/Items";
import { CarsYear } from "./components/carsyear/CarsYear";
import { CarsUR } from "./components/carsur/CarsUR";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <NavLink to="/">Coffees-UR</NavLink>
        <NavLink to="/count">Count-UR</NavLink>
        <NavLink to="/todo">Todo-UR</NavLink>
        <NavLink to="/carsur">Cars-UR</NavLink>
        <NavLink to="/items">Items-UR</NavLink>
        <NavLink to="/carsyear">Cars-Year</NavLink>
        <NavLink to="/cars">Cars</NavLink>
        <NavLink to="/card">Card</NavLink>
        <NavLink to="/carsnew">CarsNew</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <div className="content">
        <Routes>
          <Route path="" element={<Coffees />} />
          <Route path="count" element={<Count />} />
          <Route path="todo" element={<Todo />} />
          <Route path="carsur" element={<CarsUR />} />
          <Route path="items" element={<Items />} />
          <Route path="carsyear" element={<CarsYear />} />
          <Route path="cars" element={<Cars />} />
          <Route path="card" element={<Card />} />
          <Route path="carsnew" element={<CarsNew />} />
          <Route path="movies" element={<Movies />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
