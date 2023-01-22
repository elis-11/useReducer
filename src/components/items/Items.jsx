import { useReducer, useRef, useState } from "react";
import { initialState, itemsReducer } from "../../reducer";
import style from "../todo/Todo.module.css";

export const Items = () => {
  const [state, dispatch] = useReducer(itemsReducer, initialState);
  const { items } = state;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const inputRef = useRef()

  const addItem = (e) => {
    e.preventDefault();
    const newItem = {
      id: Date.now().toString(),
      title: title,
      description: description,
    };
    console.log("newItem:",newItem);
    dispatch({ type: "ADD_ITEM", payload: newItem });
    inputRef.current.focus()
    setTitle("");
    setDescription("");
  };

  const deleteItem = (id) => {
    dispatch({ type: "DELETE_ITEM", payload: id });
  };

  return (
    <div className={style.root}>
      <h2 style={{color: 'gold'}}>Items</h2>
      <form onSubmit={addItem} className={style.form}>
        <input
        ref={inputRef}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        {/* <button onClick={addItem}>Add</button> */}
        <button className={style.add} type="submit">Add</button>
      </form>
      <div className={style.todos}>
        {items.map((item) => (
          <div className={style.todo} key={item.id}>
            <div className="title">{item.title}</div>
            <div className="description">{item.description}</div>
            <button className={style.delete} onClick={() => deleteItem(item.id)}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
};
