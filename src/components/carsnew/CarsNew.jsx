import { useState } from "react";
import carsData from "./cars.json";
import "./Cars.scss";

export const CarsNew =() => {
  const [cars, setCars] = useState(carsData);
  const [productName, setProductName] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [filteredCategory, setFilteredCategory] = useState("");
  let filteredCars = cars;
  
  console.log(filteredCategory);
  if (filteredCategory) {
    filteredCars = filteredCars.filter((car) => {
      return car.category.includes(filteredCategory);
    });
  }

  if (productName) {
    filteredCars = filteredCars.filter((car) => {
      return car.name.toLowerCase().includes(productName.toLowerCase());
    });
  }

  if (priceMin) {
    filteredCars = filteredCars.filter((car) => {
      return car.price >= priceMin;
    });
  }

  if (priceMax) {
    filteredCars = filteredCars.filter((car) => {
      return car.price <= priceMax;
    });
  }

  return (
    <div className="App">
      <div className="search">
        <div className="input">
          <h4>Input:</h4>
          <div className="productName">
            Car name:{" "}
            <input
              type="text"
              value={productName}
              onChange={(e) => {
                setProductName(e.target.value);
              }}
            />
          </div>
          <div className="priceMin">
            Price Min:{" "}
            <input
              type="number"
              value={priceMin}
              onChange={(e) => {
                setPriceMin(e.target.value);
              }}
            />
            {priceMin >= 10 && <button>button</button>}
          </div>
          <div className="priceMax">
            Price Max:{" "}
            <input
              type="number"
              value={priceMax}
              onChange={(e) => setPriceMax(e.target.value)}
            />
          </div>
        </div>
        <div className="category">
          <h4>Category:</h4>
          <div className="filterByCategory">
            <input
              type="radio"
              name="category"
              value="Toyota"
              onChange={(e) =>
                setFilteredCategory(e.target.checked ? e.target.value : "")
              }
            />
            <span>Toyota</span>
          </div>
          <div className="filterByCategory">
            <input
              type="radio"
              name="category"
              value="BMW"
              onChange={(e) =>
                setFilteredCategory(e.target.checked ? e.target.value : "")
              }
            />
            <span>BMW</span>
          </div>
          <div className="filterByCategory">
            <input
              type="radio"
              name="category"
              value="Lexus"
              onChange={(e) =>
                setFilteredCategory(e.target.checked ? e.target.value : "")
              }
            />
            <span>Lexus</span>
          </div>
        </div>
      </div>

      <div className="cars">
        {filteredCars.map((car) => (
          <div key={car._id} className="car">
            <img src={car.image} alt={car.name} />
            <div className="name">{car.name}</div>
            <div className="price">price: {car.price} €</div>
            <div className="year">{car.year} year</div>
          </div>
        ))}
      </div>
    </div>
  );
}
