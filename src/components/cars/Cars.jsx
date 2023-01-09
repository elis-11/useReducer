import { useEffect, useState } from "react";
import "./Cars.scss";
import carsJson from "./cars.json";

export const Cars = () => {
  // Array of all car objects
  const carList = carsJson;
  // List of all cars satisfing all the filters
  const [filteredList, setFilteredList] = useState(carList);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedYear, setSelectedYear] = useState();

  const filterByBrand = (filteredData) => {
    // Avoid filter for empty string
    if (!selectedBrand) {
      return filteredData;
    }
    const filteredCars = filteredData.filter((car) =>
      car.name.includes(selectedBrand)
    );
    return filteredCars;
  };
  // Update seletedBrand state
  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  const filterByYear = (filteredData) => {
    // Avoid filter for null value
    if (!selectedYear) {
      return filteredData;
    }

    const filteredCars = filteredData.filter(
      (car) => car.year === selectedYear
    );
    return filteredCars;
  };

  // Toggle seletedYear state
  const handleYearChange = (year) => {
    const inputYear = Number(year);
    console.log(year);
    if (inputYear === selectedYear) {
      setSelectedYear("");
    } else {
      setSelectedYear(inputYear);
    }
  };

  useEffect(() => {
    let filteredData = filterByBrand(carList);
    filteredData = filterByYear(filteredData);
    setFilteredList(filteredData);
  }, [selectedBrand, selectedYear]);

  return (
    <div className="Cars">
      <div className="brand-filter">
        <div>Filter by Brand :</div>
        <select
          className="brand-input"
          value={selectedBrand}
          onChange={handleBrandChange}
        >
          <option value="">All</option>
          <option value="BMW">BMW</option>
          <option value="VW">VW</option>
          <option value="Audi">Audi</option>
        </select>
      </div>
      <div>Filter by Year</div>
      <div className="year">
        {[2018, 2019, 2020].map((year) => (
          <div
            key={year}
            onClick={() => handleYearChange(year)}
            className={selectedYear === year ? "active" : "filter"}
          >
            {year}
          </div>
        ))}
      </div>
      <div className="cars">
        {filteredList.map((item, index) => (
          <div className="car" key={index}>
            <div className="car-name">{`Name: ${item.name}`}</div>
            <div className="car-year">{`Year: ${item.year}`}</div>
            <img className="image" src={item.url} alt="car-img" />
          </div>
        ))}
      </div>
    </div>
  );
};
