import { useReducer } from "react";
import { initialState, reducer } from "../reducer";
import style from "./Coffees.module.css";

export const Coffees = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { coffees, savedCoffee, message } = state;

  return (
    <div className={style.root}>
      <div className={style.coffees}>
        {coffees.map((coffee) => (
          <div
            onClick={() =>
              dispatch({
                type: "selectedCoffee",
                payload: coffee,
              })
            }
            key={coffee._id}
            className={style.coffee}
          >
            <img src={coffee.image} alt={coffee.name} />
            <div className="name">{coffee.name}</div>
            <div className="price">{coffee.price}</div>
          </div>
        ))}
      </div>
      <input type="number" onChange={(e) => e.target.value} />
      <button >buy now!</button>
      <div className="message">{message}</div>
    </div>
  );
};
