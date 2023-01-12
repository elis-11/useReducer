import { useReducer, useState } from "react";
import { initialState, reducer } from "../reducer";

export const Items = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { items } = state;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addItem = (e) => {
    e.preventDefault();
    const newItem = {
      id: new Date().toString(),
      title: title,
      description: description,
    };
    dispatch({ type: "ADD_ITEM", payload: newItem });

    setTitle("");
    setDescription("");
  };
  const deleteItem = (id) => {
    dispatch({ type: "DELETE_ITEM", payload: id });
  };

  return (
    <div>
      <form onSubmit={addItem}>
        <input
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
        <button type="submit">Add</button>
      </form>
      <div className="items">
        {items.map((item) => (
          <div className="item" key={item.id}>
            <div className="title">{item.title}</div>
            <div className="description">{item.description}</div>
            <button onClick={() => deleteItem(item.id)}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
};
