import { useState } from "react";
import style from "./Todo.module.css";
export const TodoActions = ({ todo, dispatch, index }) => {
  const [editTodo, setEditTodo] = useState(todo);

  const handleEditTodo = () => {
    dispatch({ type: "UPDATE_TODO", payload: editTodo });
  };

  const handleTodoChange = (e) => {
    setEditTodo({ ...editTodo, [e.target.name]: e.target.value });
  };

  const removeTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  return (
    <div className={style.todo}>
      {handleEditTodo ? (
        <div className={style.todo}>
          <input
            type="text"
            name="title"
            value={editTodo.title}
            onChange={handleTodoChange}
          />
          <input
            type="text"
            name="description"
            value={editTodo.description}
            onChange={handleTodoChange}
          />
        </div>
      ) : (
        <div className={style.todo}>
          <div>
            {index + 1}: {"  "} {todo.title}
          </div>
          <div>{todo.description}</div>
        </div>
      )}
      <button className={style.delete} onClick={() => removeTodo(todo.id)}>
        delete
      </button>
      <button onClick={() => handleEditTodo(todo.id)}>edit</button>
    </div>
  );
};
