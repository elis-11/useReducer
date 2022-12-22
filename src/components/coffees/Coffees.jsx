import { useReducer, useState } from "react";
import { initialState, reducer } from "../reducer";
import style from "./Coffees.module.css";

export const Coffees = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { coffees, savedCoffee, message } = state;
  const [amount, setAmount] = useState("");

  const updateAmount = (amount) => {
    setAmount(Number(amount));
  };
  const onClickButton = () => {
    dispatch({
      type: "newMessage",
      payload:
        amount >= savedCoffee.price
          ? "Enjoy your" + savedCoffee.name
          : "No coffee for no money...",
    });
    // payload: 'Enjoy your' + savedCoffee.name
    // : dispatch({
    //   type: 'newMessage',
    //   payload: 'No coffee for no money...'
    // })
  };

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
      <input
        type="number"
        value={amount}
        onChange={(e) => updateAmount(e.target.value)}
      />
      <button onClick={() => onClickButton()}>buy now!</button>
      <div className="message">{message}</div>
    </div>
  );
};
