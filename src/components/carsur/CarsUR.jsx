import { useReducer, useState } from "react";
import { initialState, reducer } from "../../reducer";
import "./CarsUR.scss";

export const CarsUR = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { cars, filteredYears, selectedYear } = state;
  console.log("cars", cars);
  console.log("filteredYears", filteredYears);

  const handleSelectedYear = (year) => {
    dispatch({ type: "FILTER_YEAR", payload: year });
  };
  console.log("selectedYear", selectedYear);
  let filteredCars = cars;

  if (selectedYear) {
    filteredCars = cars.filter((car) => car.year === selectedYear);
    console.log("filteredCars");
  }
  console.log("filteredCars", filteredCars);

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

      <div className="cars">
        {filteredCars.map((car) => (
          <div key={car._id} className="car">
            <div className="name">{car.name}</div>
            <div className="year">{car.year}</div>
            <img className="image" src={car.image} alt={car.name} />
          </div>
        ))}
      </div>
    </div>
  );
};
