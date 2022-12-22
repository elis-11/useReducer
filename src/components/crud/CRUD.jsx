import { useReducer } from 'react'
import { initialState, reducer } from '../reducer'

export const CRUD = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <input type="text"
        
        />

    </div>
  )
}
