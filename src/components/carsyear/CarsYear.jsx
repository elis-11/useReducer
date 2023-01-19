import { useState } from "react";
import carsJson from "./cars.json";
import "./CarsYear.scss";

export const CarsYear = () => {
  const [cars, setCars] = useState(carsJson);
  const [selectedYear, setSelectedYear] = useState();
  const years = [2018, 2019, 2020];

  // YEAR
  const handleSelectedYear = (year) => {
    setSelectedYear(year);
  };
  const clearSelectedYear = () => {
    setSelectedYear("");
  };

  let filteredCars = cars;
  if (selectedYear) {
    filteredCars = cars.filter((car) => car.year === selectedYear);
  }

  return (
    <div className="Cars">
      <h2>Cars-Year</h2>
      
      <div className="years">
        <div onClick={() => clearSelectedYear()} className="filter">
          All
        </div>
        {years.map((year) => (
          <div
            key={year}
            className={selectedYear === year ? "active" : "filter"}
            onClick={() => handleSelectedYear(year)}
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
