import coffeesJson from "./assets/coffees.json";
import carsJson from "./assets/cars.json";

export const initialState = {
  feedbacks: JSON.parse(localStorage.getItem("feedbacks")) || [],
  coffees: coffeesJson,
  savedCoffee: undefined,
  message: "",
  arr: [],
  counter: 0,
  items: [],
  todos: JSON.parse(localStorage.getItem("todos")) || [],
  cars: carsJson,
  selectedYear: undefined,
  filteredYears: [2018, 2019, 2020],
};

export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (action.type) {
    case "FILTER_CAR_YEAR":
      return {
        ...state,
        selectedYear: action.payload,
      };
    case "ADD_CAR":
      return {
        ...state,
        cars: [...state.cars, action.payload],
      };
    case "DELETE_CAR":
      return {
        ...state,
        cars: state.cars.filter((car) => car._id !== action.payload),
      };
    default:
      return state;
  }
};
export const countReducer = (state, action) => {
  const { type, payload } = action;

  switch (action.type) {
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
    default:
      return state;
  }
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
    case "UPDATE_TODO": {
      return {};
    }
    default: {
      return state;
    }
  }
};

export const coffeesReducer = (state, action) => {
  switch (action.type) {
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
    case "ADD_FEEDBACK":
      return {
        ...state,
        feedbacks: [...state.feedbacks, payload],
      };
    case "REMOVE_FEEDBACK":
      return {
        ...state,
        feedbacks: state.feedbacks.filter(
          (feedback) => feedback.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
export const itemsReducer = (state, action) => {
  // const { type, payload } = action;
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "DELETE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
