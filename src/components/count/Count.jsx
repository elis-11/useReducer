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
      <br />
      <img src="https://picsum.photos/100" alt="photos" />
      <img src="https://picsum.photos/seed/100/100" alt="photos" />
      <img src="https://picsum.photos/seed/picsum/200/100" alt="photos" />
      <img src="https://picsum.photos/100" alt="photos" />
      <img src="https://picsum.photos/100?blur" alt="photos" />
      <img src="https://picsum.photos/100?blur=1" alt="photos" />
      <img src="https://picsum.photos/100.jpg" alt="photos" />
      <img src="https://picsum.photos/100?grayscale" alt="photos" />
      <img src="https://picsum.photos/id/56/100" alt="photos" />
      <img src="https://picsum.photos/id/52/100" alt="photos" />
      <img src="https://picsum.photos/id/53/100" alt="photos" />
      <img src="https://picsum.photos/seed/picsum/100" alt="photos" />
      <img src="https://picsum.photos/id/215/100" alt="photos" />
      <img src="https://picsum.photos/id/501/100" alt="photos" />
      <img src="https://picsum.photos/id/519/100" alt="photos" />
      <img src="https://picsum.photos/id/543/100" alt="photos" />
      <img src="https://picsum.photos/id/798/100" alt="photos" />
      <img src="https://picsum.photos/id/702/100" alt="photos" />
      <img src="https://picsum.photos/id/428/100" alt="photos" />
      <img src="https://picsum.photos/id/249/100" alt="photos" />
      <img src="https://picsum.photos/id/219/100" alt="photos" />
      <img src="https://picsum.photos/id/213/100" alt="photos" />
      <img src="https://picsum.photos/id/866/100" alt="photos" />
      <img src="https://picsum.photos/id/788/100" alt="photos" />
      <img src="https://picsum.photos/id/715/100" alt="photos" />
      <img src="https://picsum.photos/id/881/100" alt="photos" />
      <img src="https://picsum.photos/id/828/100" alt="photos" />
    </div>
  );
};
