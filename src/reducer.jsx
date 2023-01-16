import coffeesJson from "./assets/coffees.json";

export const initialState = {
  feedbacks: JSON.parse(localStorage.getItem("feedbacks")) || [],
  coffees: coffeesJson,
  savedCoffee: undefined,
  message: "",
  arr: [],
  counter: 1,
  items: [],
  todosReducer: JSON.parse(localStorage.getItem("todosReducer")) || [],
};

export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (action.type) {
    case "ADD_ITEM": {
      return {
        ...state,
        items: [...state.items, payload],
      };
    }
    case "DELETE_ITEM": {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    }
    case "feedback": {
      return {
        ...state,
        feedbacks: [...state.feedbacks, payload],
      };
    }
    case "addTodo": {
      return {
        ...state,
        todosReducer: [...state.todosReducer, payload],
      };
    }
    case "removeTodo": {
      return {
        ...state,
        todosReducer: [state.todosReducer, payload],
      };
    }
    case "selectedCoffee":
      console.log(action.payload);
      return {
        ...state,
        message:
          "Selected: " +
          action.payload.name +
          " costs " +
          action.payload.costs +
          " €",
        savedCoffee: action.payload,
      };
    case "newMessage":
      return {
        ...state,
        message: payload,
      };
    case "increment":
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case "decrement":
      return {
        ...state,
        counter: state.counter - action.payload,
      };
  }
};
