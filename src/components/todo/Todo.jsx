import React, { useEffect, useReducer, useRef, useState } from "react";
import { reducer, initialState } from "../../reducer";
import style from "../todo/Todo.module.css";

export const Todo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { todos } = state;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const inputRef = useRef()

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }, [state.todos]);

  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: new Date().toString(),
      title: title,
      description: description,
    };
    dispatch({ type: "ADD_TODO", payload: newTodo });
    setTitle("");
    setDescription("");
    inputRef.current.focus()
  };

  const removeTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
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
        {todos.map((todo, index) => (
          <div key={todo.id} className={style.todo}>
            <div className="title">{index + 1}: {" "}{todo.title}</div>
            <div className="description">{todo.description}</div>
            <button
              className={style.delete}
              onClick={() => removeTodo(todo.id)}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
