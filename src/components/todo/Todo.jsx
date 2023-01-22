import React, { useEffect, useReducer, useRef, useState } from "react";
import { todoReducer, initialState } from "../../reducer";
import style from "../todo/Todo.module.css";
import { TodoActions } from "./TodoActions";

export const Todo = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const { todos } = state;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }, [state.todos]);

  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now().toString(),
      title: title,
      description: description,
    };
    console.log("newTodo:", newTodo);
    dispatch({ type: "ADD_TODO", payload: newTodo });
    setTitle("");
    setDescription("");
    inputRef.current.focus();
  };

  return (
    <div className={style.root}>
      <h2>Todos-UR</h2>
      <div className="addTodo">
        <form onSubmit={addTodo} className={style.form}>
          <input
            ref={inputRef}
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className={style.add} type="submit">
            Add
          </button>
        </form>
      </div>
      <div className={style.todos}>
        {todos.map((todo) => (
          <TodoActions key={todo.id} dispatch={dispatch} todo={todo} />
        ))}
      </div>
    </div>
  );
};
