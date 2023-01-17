import { useReducer, useState } from "react";
import { initialState, reducer } from "../../reducer";
import "./CarsUR.scss";

export const CarsUR = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { cars } = state;
  console.log("cars", cars);

  return (
    <div className="Cars">
      <h2>Cars-UR</h2>
      <div className="selected"></div>
      <div className="cars">
        {cars.map((car) => (
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
