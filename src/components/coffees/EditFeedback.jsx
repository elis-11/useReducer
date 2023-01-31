import { useState } from "react";
import style from "./Coffees.module.css";

export const EditFeedback = ({ feedback, dispatch, index }) => {
  // const [editFeedback, setEditFeedback] = useState({ email: "", text: "" });
  const [editFeedback, setEditFeedback] = useState(feedback);

  const handleChangeFeedback = (e) => {
    setEditFeedback({ ...editFeedback, [e.target.name]: e.target.value });
  };

  const handleEditFeedback = (editFeedback) => {
    dispatch({ type: "UPDATE_FEEDBACK", payload: editFeedback });
  };

  const removeFeedback = (id) => {
    dispatch({ type: "REMOVE_FEEDBACK", payload: id });
  };

  return (
    <div className={style.feedback}>
      {handleEditFeedback ? (
        <div className={style.items}>
          <input
            type="text"
            name="email"
            value={editFeedback.email}
            onChange={handleChangeFeedback}
            className={style.item}
          />
          <input
            type="text"
            name="text"
            value={editFeedback.text}
            onChange={handleChangeFeedback}
            className={style.item}
          />
        </div>
      ) : (
        <div className={style.items}>
          <div className={style.item}>
            {index + 1}: {feedback.email}
          </div>
          <div className={style.item}>{feedback.text} </div>
        </div>
      )}
      <button
        className={style.edit}
        onClick={() => handleEditFeedback(feedback.id)}
      >
        edit
      </button>
      <button
        className={style.delete}
        onClick={() => removeFeedback(feedback.id)}
      >
        delete
      </button>
    </div>
  );
};
