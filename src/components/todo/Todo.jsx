import { useEffect, useReducer, useState } from "react";
import { useLocalStorage } from "../../useLocalStorage";
import { initialState, reducer } from "../reducer";

export const Todo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const [todos, setTodos] = useLocalStorage(reducer, initialState)
  const [todo, setTodo] = useLocalStorage("todo", "");

  return (
    <div>
      <form>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="full name"
          aria-label="full name"
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};
