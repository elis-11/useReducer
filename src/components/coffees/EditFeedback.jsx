import style from "./Coffees.module.css";

export const EditFeedback = ({ feedback, dispatch, index }) => {

  const removeFeedback = (id) => {
    dispatch({ type: "REMOVE_FEEDBACK", payload: id });
  };

  return (
    <div className={style.feedbacks}>
        <div className={style.items}>
          <div className={style.item}>
            {index + 1}: {feedback.email}
          </div>
          <div className={style.item}>{feedback.text} </div>
        </div>
      <button
        className={style.delete}
        onClick={() => removeFeedback(feedback.id)}
      >
        delete
      </button>
    </div>
  );
};
