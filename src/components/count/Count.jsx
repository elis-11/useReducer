import { useReducer } from "react";
import { initialState, reducer } from "../reducer";

export const Count = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { counter } = state;

  const INCREMENT = "increment";
  const DECREMENT = "decrement";

  const increment = (payload) => {
    return {
      type: INCREMENT,
      payload
    }
  }
  const decrement = (payload) => ({
    type: DECREMENT,
    payload,
  });

  return (
    <div>
      <h2>Count</h2>
      <button onClick={() => dispatch(decrement(2))}>- 2</button>
      <button onClick={() => dispatch(decrement(1))}>- 1</button>
      <span>{counter}</span>
      <button onClick={() => dispatch(increment(1))}>+ 1</button>
      <button onClick={() => dispatch(increment(2))}>+ 2</button>
    </div>
  );
};
