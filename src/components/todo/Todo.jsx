import { useReducer, useState } from "react";
// import { useLocalStorage } from "../../useLocalStorage";
import { initialState, reducer } from "../reducer";
import style from "./Todo.module.css";

export const Todo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { todos, message } = state;
  const [newTodo, setNewTodo] = useState({
    title: "",
    description: "",
  });

  const addTodo = (e) => {
    e.preventDefault()
    const todoNew = {
      _id: Date.now().toString(),
      title: newTodo.title,
      description: newTodo.description,
    };
    dispatch({
      type: "addTodo",
      payload: todoNew
    })
    setNewTodo({...newTodo, title: "", description: "" });
  };

  return (
    <div className={style.root}>
      <form onSubmit={addTodo} className={style.form}>
        <input
          type="text"
          placeholder="title"
          name="title"
          value={newTodo.title}
          onChange={setNewTodo}
        />
        <input
          type="text"
          placeholder="description"
          name="description"
          value={newTodo.description}
          onChange={setNewTodo}/>
        <button type="submit">Add</button>
      </form>
      <div className={style.todos}>
        {todos.map((todo) => (
          <div key={todo._id} className={style.todo}>
            <span className="title">{todo.title}</span>{" "}
            <span className="description">{todo.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
