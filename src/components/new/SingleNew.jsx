import { useState } from "react";

export const SingleNew = ({ todo, setTodo, setEditing, dispatch }) => {
  const [updatedTodo, setUpdatedTodo] = useState([]);

  const handleDelete = () => {
    dispatch({ type: "DELETE_TODO", payload: todo });
  };

  const handleEdit = (t) => {
    setEditing(true);
    setUpdatedTodo(t);
    setTodo(t);
    dispatch({ type: "UPDATE_TODO", payload: updatedTodo });
  };

  return (
    <div key={todo.id} className="todo">
      <h1>
        {todo.id}. {todo.title}
      </h1>
      <h3>" {todo.desc} "</h3>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={() => handleEdit(todo)}>Edit</button>
    </div>
  );
};
