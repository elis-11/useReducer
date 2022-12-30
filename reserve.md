import { useEffect, useMemo, useState } from "react";
import carsJson from "./cars.json";
import "./Cars.scss";

export const Cars2 = () => {
  const [cars, setCars] = useState(carsJson);
  const [selectedBrand, setSelectedBrand] = useState();
  const [selectedYear, setSelectedYear] = useState();

  const filteredYear = (item) => {
    const result = cars.filter((car) => {
      return car.year === item;
    });
    setSelectedYear(result);
    console.log(result)
  };
  console.log('filteredYear:', filteredYear)

  useEffect(() => {
    setCars(cars);
  }, []);

  const filteredList = () => {
    if (!selectedBrand) {
      return cars;
    }
    return cars.filter((c) => c.name.includes(selectedBrand));
  };
  const filteredCars = useMemo(filteredList, [selectedBrand, cars]);

  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
  };

  return (
    <div className="Cars">
      <div className="filter">
        <div className="brands">
          <select name="name" id="name" onChange={handleBrandChange}>
            <option value="">All</option>
            <option value="BMW">BMW</option>
            <option value="VW">VW</option>
            <option value="Audi">Audi</option>
          </select>
        </div>

        <div className="year">
          <button className="year" onClick={() => setSelectedYear(filteredCars)}>
            All
          </button>
          <button className="year" onClick={() => filteredYear('2018')}>
            2018
          </button>
          <button className="year" onClick={() => filteredYear('2019')}>
            2019
          </button>
          <button className="year" onClick={() => filteredYear('2020')}>
            2020
          </button>
        </div>
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
