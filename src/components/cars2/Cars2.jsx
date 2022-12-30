import { useEffect, useMemo, useState } from "react";
import carsJson from "./cars.json";
import "./Cars.scss";

export const Cars2 = () => {
  const [cars] = useState(carsJson);
  const [list, setList] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState();

  useEffect(() => {
    setList(cars);
  }, []);

  const filteredList = () => {
    if (!selectedBrand) {
      return list;
    }
    return list.filter((c) => c.name.includes(selectedBrand));
  };
  const filterList = useMemo(filteredList, [selectedBrand, list]);

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
      </div>

      <div className="car-list">
        {filterList.map((car) => (
          <div key={car._id} className="car-item">
            <div className="car-name">{car.name}</div>
            <div className="car-year">{car.year}</div>
            <img className="car-image" src={car.image} alt={car.name} />
          </div>
        ))}
      </div>
    </div>
  );
};
