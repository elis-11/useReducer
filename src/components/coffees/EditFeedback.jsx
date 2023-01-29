import { useState } from "react";
import style from "./Coffees.module.css";

export const EditFeedback = ({ feedback, dispatch, number }) => {
  const [editFeedback, setEditFeedback] = useState(feedback);

  const handleFeedbackChange = (e) => {
    setEditFeedback({ ...editFeedback, [e.target.name]: e.target.value });
  };

  const handleEditFeedback = (editFeedback) => {
    dispatch({ type: "UPDATE_FEEDBACK", payload: editFeedback });
  };

  const removeFeedback = (id) => {
    dispatch({ type: "REMOVE_FEEDBACK", payload: id });
  };

  return (
    <div className={style.feedbacks}>
      {handleEditFeedback ? (
        <div className={style.items}>
          <input
            className={style.item}
            type="text"
            name="email"
            placeholder="Email"
            value={editFeedback.email}
            onChange={handleFeedbackChange}
          />
          <input
            className={style.item}
            type="text"
            name="text"
            placeholder="Text"
            value={editFeedback.text}
            onChange={handleFeedbackChange}
          />
        </div>
      ) : (
        <div className={style.items}>
          <div className={style.items}>
            {number}: {feedback.email}
          </div>
          <div className={style.item}>{feedback.text} </div>
        </div>
      )}
      <button
        className={style.delete}
        onClick={() => removeFeedback(feedback.id)}
      >
        delete
      </button>

      <button
        className={style.edit}
        onClick={() => handleEditFeedback(feedback.id)}
      >
        edit
      </button>
    </div>
  );
};
