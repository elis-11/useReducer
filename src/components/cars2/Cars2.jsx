import { useState } from 'react'
import carsJson from './cars.json'
import './Cars.scss'

export const Cars2 = () => {
  const [cars, setCars] = useState(carsJson)
  const [selectedBrand, setSelectedBrand] = useState(cars[0].value)
  let filteredCars = cars

  const handleChange = e => {
    setSelectedBrand(e.target.value)
  }

  return (
    <div className='Cars'>
      <div className="filter">
        <div className="brends">
          <select 
            value={selectedBrand}
            onChange={handleChange}
          >
            {filteredCars.map(c => (
                          <option value={c.value} key={c.value}>{c.name}</option>
                        ))}
          {/* <option value="">All</option>
          <option value="BMW">BMW</option>
          <option value="VW">VW</option>
          <option value="Audi">Audi</option> */}
          </select>
          {/* {selectedBrand && <h2>{selectedBrand} was selected</h2>} */}
        </div>
      </div>


      <div className="car-list">
        {cars.map(car => (
          <div key={car._id} className="car-item">
            <div className="car-name">{car.name}</div>
            <div className="car-year">{car.year}</div>
            <img className='car-image' src={car.image} alt={car.name} />
          </div>
        ))
        }
      </div>
    </div>
  )
}
