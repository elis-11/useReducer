import { useReducer, useState } from "react";
import { initialState, newsReducer } from "../../reducer";
import { SingleNew } from "./SingleNew";

export const New = () => {
  const [state, dispatch] = useReducer(newsReducer, initialState);
  const { news } = state;
  // const [state, dispatch] = useReducer(newsReducer, {
  //   news: [],
  // });
  // const { news } = state;

  const [editing, setEditing] = useState(false);
  const [todo, setTodo] = useState({
    title: "",
    desc: "",
  });

  const handleChange = (e) => {
    setTodo((prev) => {
      return {
        ...prev,
        [e.target.name]: [e.target.value],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.title || !todo.desc) {
      alert("Please enter all fields !!!");
    } else {
      const newTodo = {
        //   id: news.length === 0 ? 1 : news[news.length - 1].id + 1,
        id: news.length + 1,
        title: todo.title,
        desc: todo.desc,
      };
      dispatch({ type: "CREATE_TODO", payload: newTodo });
      setTodo({
        title: "",
        desc: "",
      });
    }
  };

  const handleUpdate = (e) => {
    setEditing(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title..."
          onChange={handleChange}
          value={todo.title}
        />
        <input
          type="text"
          name="desc"
          placeholder="description..."
          onChange={handleChange}
          value={todo.desc}
        />
        {editing ? (
          <button onClick={handleUpdate}>Update</button>
        ) : (
          <button>Submit</button>
        )}
      </form>
      <h2 style={{ textAlign: "center", margin: "10px 0px" }}>TODOS LIST :</h2>
      {news.map((todo) => (
        <SingleNew 
        key={todo.id}
          todo={todo}
          setTodo={setTodo}
          setEditing={setEditing}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
};
