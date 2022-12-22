import { useReducer, useState } from "react";
import { initialState, reducer } from "../reducer";
import style from "./Coffees.module.css";

export const Coffees = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { coffees, savedCoffee, message, feedbacks } = state;
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const updateAmount = (amount) => {
    setAmount(Number(amount));
  };
  const onClickButton = () => {
    dispatch({
      type: "newMessage",
      payload:
        amount >= savedCoffee.price
          ? "Enjoy your " + " " + savedCoffee.name
          : "No money no coffee...",
    });
  };
  const onFeedback = (e) => {
    e.preventDefault();
    const feedbackNew = {
      _id: Date.now().toString(),
      email: email,
      text: text,
    };
    console.log(feedbackNew);
    dispatch({
      type: "feedback",
      payload: feedbackNew,
    });
    setEmail("");
    setText("");
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

      <form onSubmit={onFeedback}>
        <input
          type="text"
          placeholder="email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="your feedback..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit"> Send</button>
        <div>
          {feedbacks.map((feedback) => (
            <div key={feedback._id}>{feedback.email}  {feedback.text}</div>
          ))}
        </div>
      </form>
    </div>
  );
};
