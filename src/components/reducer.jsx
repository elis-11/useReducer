import coffeesJson from "../assets/coffees.json";

export const initialState = {
  coffees: coffeesJson,
  savedCoffee: undefined,
  message: "",
  arr: [],
  counter: 1,
};

export const reducer = (state, action) => {
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
    case "selectedCoffee":
      console.log(action.payload);
      return {
        ...state,
        message: "Selected:" + action.payload.name,
        savedCoffee: action.payload,
      };
    case "newMessage":
      return {
        ...state,
        message: payload,
      };
  }
};
