import { useEffect, useReducer, useState } from "react";
import { initialState, coffeesReducer } from "../../reducer";
import style from "./Coffees.module.css";

export const Coffees = () => {
  const [state, dispatch] = useReducer(coffeesReducer, initialState);
  const { coffees, savedCoffee, message, feedbacks } = state;
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  console.log("feedbacks:", feedbacks)
  console.log("coffees:", coffees)

  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(state.feedbacks));
  }, [state.feedbacks]);

  const updateAmount = (amount) => {
    setAmount(Number(amount));
  };
  const onClickButton = () => {
    dispatch({
      type: "newMessage",
      payload:
        amount >= savedCoffee.costs
          ? "Enjoy your " + " " + savedCoffee.name
          : "No money no coffee...",
    });
  };
  const onFeedback = (e) => {
    e.preventDefault();
    const feedbackNew = {
      id: Date.now().toString(),
      email,
      text,
    };
    dispatch({
      type: "ADD_FEEDBACK",
      payload: feedbackNew,
    });
    console.log("feedbackNew:",feedbackNew)
    setEmail("");
    setText("");
  };
  const removeFeedback = (id) => {
    dispatch({ type: "REMOVE_FEEDBACK", payload: id });
  };

  return (
    <div className={style.root}>
      <h2>Coffees</h2>
      <div className={style.coffees}>
        {coffees.map((coffee) => (
          <div
          key={coffee._id}
          className={style.coffee}
            onClick={() =>
              dispatch({
                type: "selectedCoffee",
                payload: coffee,
              })
            }
          >
            <img src={coffee.image} alt={coffee.name} />
            <div className="name">{coffee.name}</div>
          </div>
        ))}
      </div>
      <input
        className={style.input}
        type="number"
        value={amount}
        onChange={(e) => updateAmount(e.target.value)}
      />
      <button className={style.button} onClick={() => onClickButton()}>
        buy now!
      </button>
      <div className="message">{message}</div>

      {/* FEEDBACK */}
      <form onSubmit={onFeedback}>
        <input
          className={style.feedback}
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
          className={style.feedback}
        />
        <button className={style.send} type="submit">
          {" "}
          Send feedback
        </button>
        <div>
          {feedbacks.map((feedback, index) => (
            <div key={feedback.id} className={style.feedbacks} >
              <div className={style.item}>
                {index + 1}: {feedback.email}
              </div>
              <div className={style.item}>{feedback.text} </div>
              <button onClick={() => removeFeedback(feedback.id)}>x</button>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};
