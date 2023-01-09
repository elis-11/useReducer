import React, { useReducer, useState } from "react";
import { initialState, reducer } from "../reducer";

export const New = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { items } = state;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addItem = () => {
    // e.preventDefault();
    const newItem = {
      id: new Date().toString(),
      title: title,
      description: description,
    };
    dispatch({ type: "ADD_ITEM", payload: items });
    addItem(newItem)

    setTitle("");
    setDescription("");
  };
  const deleteItem = (id) => {
    dispatch({ type: "DELETE_ITEM", payload: id });
  };

  return (
    <div>
      <div>
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
        <button onClick={addItem}>Add</button>
      </div>
      <div className="items">
        {items.map((item) => (
          <div className="item" key={item.id}>
            <div className="title">{item.title}</div>
            <div className="description">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
