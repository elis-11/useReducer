import { useReducer } from "react";
import { initialState, reducer } from '../reducer'


export const Count = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {counter} = state

  return (
    <div>
      <button
        onClick={() =>
          dispatch({
            type: "increment",
            payload: 2,
          })
        }
      >
       + 2
      </button>
      <span>{counter}</span>
      <button
        onClick={() =>
          dispatch({
            type: "decrement",
            payload: 2,
          })
        }
      >
       - 2
      </button>
    </div>
  );
}
