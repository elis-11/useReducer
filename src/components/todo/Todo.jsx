import { useEffect, useReducer, useRef, useState } from "react";
import { initialState, reducer } from "../reducer";
import style from "./Todo.module.css";
import { FaTrashAlt } from "react-icons/fa";

export const Todo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { todosReducer, message } = state;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    localStorage.setItem("todosReducer", JSON.stringify(state.todosReducer));
  }, [state.todosReducer]);

  const addTodo = (e) => {
    e.preventDefault();
    const todoNew = {
      id: Date.now().toString(),
      title: title,
      description: description,
    };
    dispatch({
      type: "addTodo",
      payload: todoNew,
    });
    setTitle("");
    setDescription("");
    inputRef.current.focus();
  };

  const removeTodo = (id) => {
    dispatch({
      type: "removeTodo",
      payload: id,
    });
  };
  return (
    <div className={style.root}>
      <form onSubmit={addTodo} className={style.form}>
        <input
          ref={inputRef}
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <div className={style.todosReducer}>
        {todosReducer.map((todo, index) => (
          <div key={index} className={style.todo}>
            <div className="title">
              {index + 1}: {todo.title}
            </div>
            <div className="description">{todo.description}</div>
            <FaTrashAlt role="button" onClick={() => removeTodo(todo.id)} />
          </div>
        ))}
      </div>
    </div>
  );
};
