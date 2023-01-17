import coffeesJson from "./assets/coffees.json";
import carsJson from "./assets/cars.json";

export const initialState = {
  feedbacks: JSON.parse(localStorage.getItem("feedbacks")) || [],
  coffees: coffeesJson,
  savedCoffee: undefined,
  message: "",
  arr: [],
  counter: 1,
  items: [],
  todosReducer: JSON.parse(localStorage.getItem("todosReducer")) || [],
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
        // items: state.items.filter((item) => item.id !== action.payload),
      };
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
