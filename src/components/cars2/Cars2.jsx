import { useState } from 'react'
import carsJson from './cars.json'
import '../cars/Cars.scss'

export const Cars2 = () => {
  const [cars, setCars] = useState(carsJson)

  return (
    <div className='Cars'>



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
