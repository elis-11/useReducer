import { useReducer, useState } from "react";
// import { useLocalStorage } from "../../useLocalStorage";
import { initialState, reducer } from "../reducer";
import style from "./Todo.module.css"

export const Todo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {todos, message} = state;
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      _id: Date.now().toString(),
      title: title,
      description: description
    }
    dispatch({
      type: "addTodo",
      payload: newTodo
    })
    setTitle("")
    setDescription("")
  }

  return (
    <div className={style.root}>
      <form onSubmit={addTodo} className={style.form} >
        <input type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        <input type="text"
        placeholder="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <div className={style.todos}>
        {todos.map(todo=>(
          <div key={todo._id} className={style.todo}>
            <span className="title">{todo.title}</span> {' '}
            <span className="description">{todo.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
