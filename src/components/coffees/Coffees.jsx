import { useEffect, useReducer, useState } from "react";
import { initialState, coffeesReducer } from "../../reducer";
import style from "./Coffees.module.css";
import { EditFeedback } from "./EditFeedback";

export const Coffees = () => {
  const [state, dispatch] = useReducer(coffeesReducer, initialState);
  const { coffees, savedCoffee, message, feedbacks } = state;
  const [amount, setAmount] = useState("");
  // const [email, setEmail] = useState("");
  // const [text, setText] = useState("");
  const [feedbackNew, setFeedbackNew] = useState({
    // id: new Date().toString(),
    // id: Math.random().toString(),
    // id: Date.now().toString(),
    id: Math.floor(Math.random() * 100).toString,
    email: "",
    text: "",
  });
  console.log("feedbacks:", feedbacks);
  console.log("coffees:", coffees);

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
  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_FEEDBACK",
      payload: feedbackNew,
    });
    console.log("feedbackNew:", feedbackNew);
    setFeedbackNew({ ...feedbackNew, email: "", text: "" });
    // setEmail("");
    // setText("");
  };
  const handleAddFeedback = (e) => {
    setFeedbackNew({ ...feedbackNew, [e.target.name]: e.target.value });
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
      <form onSubmit={handleFeedbackSubmit}>
        <input
          type="text"
          placeholder="email..."
          name="email"
          value={feedbackNew.email}
          onChange={handleAddFeedback}
          // onChange={(e) =>
          //   setFeedbackNew({ ...feedbackNew, email: e.target.value })
          // }
          className={style.addFeedback}
        />
        <input
          type="text"
          placeholder="your feedback..."
          name="text"
          value={feedbackNew.text}
          onChange={handleAddFeedback}
          // onChange={(e) =>
          //   setFeedbackNew({ ...feedbackNew, text: e.target.value })
          // }
          className={style.addFeedback}
        />
        <button className={style.sendFeedback} type="submit">
          {" "}
          Send feedback
        </button>
        <div className={style.feedbacks}>
          {feedbacks.map((feedback, index) => (
            <EditFeedback
              index={index}
              key={feedback.id}
              feedback={feedback}
              dispatch={dispatch}
            />
          ))}
        </div>
      </form>
    </div>
  );
};
