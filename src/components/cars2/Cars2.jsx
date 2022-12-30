import { useState } from 'react'
import carsJson from './cars.json'
import './Cars.scss'

export const Cars2 = () => {
  const [cars, setCars] = useState(carsJson)
  const [selectedBrand, setSelectedBrand] = useState("")
  let filteredCars = cars

  const onChange = event => {
    const value = event.target.value
    setSelectedBrand(value)
  }

  return (
    <div className='Cars'>
      <div className="filter">
        <div className="brends">
          <select onChange={onChange} 
          >
          <option value="">All</option>
          <option value="BMW">BMW</option>
          <option value="VW">VW</option>
          <option value="Audi">Audi</option>
          </select>
          {selectedBrand && <h2>{selectedBrand} was selected</h2>}
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
