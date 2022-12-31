import { useEffect, useMemo, useState } from "react";
import carsJson from "./cars.json";
import "./Cars2.scss";

export const Cars2 = () => {
  const [cars, setCars] = useState(carsJson);
  const [selectedBrand, setSelectedBrand] = useState();
  const [selectedYear, setSelectedYear] = useState();

  useEffect(() => {
    setCars(cars);
  }, []);
  // BRAND
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
  // YEAR
  const filteredYear = () => {
    const result = cars.filter((car) => {
      return car.year === selectedYear
    })
    return result
    console.log(setSelectedYear);
    setSelectedYear(selectedYear);
  };
  console.log("filteredYear:", filteredYear);

  return (
    <div className="Cars">
        <div className="brand-filter">
        <div>Filter by Brand :</div>
          <select className="brand-input" onChange={handleBrandChange}>
            <option value="">All</option>
            <option value="BMW">BMW</option>
            <option value="VW">VW</option>
            <option value="Audi">Audi</option>
          </select>
        </div>
        <div>Filter by Year</div>

        <div className="year">
          <div
            className={selectedYear === "" ? "active" : "filter"}
            onClick={() => setSelectedYear(selectedYear)}
          >
            All
          </div>
          <div className={selectedYear === 2018 ? "active" : "filter"} onClick={() => filteredYear("2018")}>
            2018
          </div>
          <div className={selectedYear === 2019 ? "active" : "filter"} onClick={() => filteredYear("2019")}>
            2019
          </div>
          <div className={selectedYear === 2020 ? "active" : "filter"} onClick={() => filteredYear("2020")}>
            2020
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
