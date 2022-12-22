import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        counter: state.counter + action.payload,
      };
    case "decrement":
      return {
        counter: state.counter - action.payload,
      };
  }
};

export const Count = () => {
  const [state, dispatch] = useReducer(reducer, {
    counter: 1,
  });

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
      <span>{state.counter}</span>
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
