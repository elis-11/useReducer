import { useReducer, useState } from "react";
import { initialState, reducer } from "../../reducer";
import "./CarsUR.scss";

export const CarsUR = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { cars, filteredYears, selectedYear } = state;
  console.log("cars", cars);
  console.log("filteredYears", filteredYears);
  const [newCar, setNewCar] = useState({
    _id: Date.now().toString(),
    name: "",
    year: 2020,
    image: "https://i.pravatar.cc",
  });

  const handleSelectedYear = (year) => {
    dispatch({ type: "FILTER_CAR_YEAR", payload: year });
  };
  console.log("selectedYear", selectedYear);
  let filteredCars = cars;

  if (selectedYear) {
    filteredCars = cars.filter((car) => car.year === selectedYear);
    console.log("filteredCars");
  }
  console.log("filteredCars", filteredCars);

  const handleNewCarSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_CAR", payload: newCar });
    setNewCar({
      _id: "",
      name: "",
      year: 2020,
      image: "https://i.pravatar.cc",
    });
  };

  const deleteCar = (id) => {
    dispatch({ type: "DELETE_CAR", payload: id });
  };

  return (
    <div className="Cars">
      <h2>Cars-UR</h2>

      <div className="year">
        {filteredYears.map((year) => (
          <div
            key={year}
            onClick={() => handleSelectedYear(year)}
            className={selectedYear === year ? "active" : "filter"}
          >
            {year}
          </div>
        ))}
      </div>

      <div className="newCar">
        <form onSubmit={handleNewCarSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newCar.name}
            onChange={(e) => setNewCar({ ...newCar, name: e.target.value })}
          />
          <input
            type="number"
            name="year"
            value={newCar.year}
            onChange={(e) => setNewCar({ ...newCar, year: e.target.value })}
          />
          <button type="submit">Add</button>
        </form>
      </div>

      <div className="cars">
        {filteredCars.map((car) => (
          <div key={car._id} className="car">
            <div className="name">{car.name}</div>
            <div className="year">{car.year}</div>
            <img className="image" src={car.image} alt={car.name} />
            <button onClick={()=>deleteCar(car._id)}>remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};
