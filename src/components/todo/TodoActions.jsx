import { useState } from "react";
import style from "./Todo.module.css";

export const TodoActions = ({ todo, dispatch, index }) => {
  const [editTodo, setEditTodo] = useState(todo);

  const handleTodoChange = (e) => {
    setEditTodo({ ...editTodo, [e.target.name]: e.target.value });
  };

  const handleEditTodo = (editTodo) => {
    dispatch({ type: "UPDATE_TODO", payload: editTodo });
  };

  const removeTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  return (
    <div className={style.todo}>
      {handleEditTodo ? (
        <div className={style.items}>
          <input
            className={style.item}
            type="text"
            name="title"
            value={editTodo.title}
            onChange={handleTodoChange}
          />
          <input
            className={style.item}
            type="text"
            name="description"
            value={editTodo.description}
            onChange={handleTodoChange}
          />
        </div>
      ) : (
      <div className={style.items}>
        <div className={style.items}>
          {index + 1}: {"  "} {todo.title}
        </div>
        <div className={style.items}>{todo.description}</div>
      </div>
      )}  
      <button className={style.delete} onClick={() => removeTodo(todo.id)}>
        delete
      </button>
      <button className={style.edit} onClick={() => handleEditTodo(todo.id)}>
        edit
      </button>
    </div>
  );
};
