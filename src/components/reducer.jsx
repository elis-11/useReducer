import coffeesJson from "../assets/coffees.json";

export const initialState = {
  feedbacks: [{_id: 'i1', email: 'Tralala', text: 'tralala'}],
  coffees: coffeesJson,
  savedCoffee: undefined,
  message: "",
  arr: [],
  counter: 1,
};

export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (action.type) {

    case 'feedback': {
        return {
            ...state,
            feedbacks: [...state.feedbacks, payload]
        }
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
    case "selectedCoffee":
      console.log(action.payload);
      return {
        ...state,
        message: "Selected: " + action.payload.name,
        savedCoffee: action.payload,
      };
    case "newMessage":
      return {
        ...state,
        message: payload,
      };
  }
};
