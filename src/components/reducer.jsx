import coffeesJson from "../assets/coffees.json";

export const initialState = {
  coffees: coffeesJson,
  savedCoffee: undefined,
  amount: 1,
  message: "",
  arr: [],
  counter: 1,
};

export const reducer = (state, action) => {

const {type, payload}= action

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
    // case "Add_Item":
    //   const addCopyArr = [...state.arr, payload];
    //   return { ...state, arr: addCopyArr };
    case "selectedCoffee":
        console.log(action.payload)
      return {
        ...state,
        message: "Selected:" + action.payload.name ,
        savedCoffee: action.payload
      };
  }
};
