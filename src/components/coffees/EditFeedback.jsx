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
      <div className={style.index}>{index + 1}: </div>
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
          <div className={style.item}>{feedback.email}</div>
          <div className={style.item}>{feedback.text} </div>
        </div>
      )}
      <button
        className={style.edit}
        onClick={() => handleEditFeedback(feedback._id)}
      >
        edit
      </button>
      <button
        className={style.delete}
        onClick={() => removeFeedback(feedback._id)}
      >
        delete
      </button>
    </div>
  );
};
