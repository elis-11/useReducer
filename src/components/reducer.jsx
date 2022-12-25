import coffeesJson from "../assets/coffees.json";

export const initialState = {
  feedbacks: [{ _id: "i1", email: "elis@gmail.com", text: "I like it!" }],
  coffees: coffeesJson,
  savedCoffee: undefined,
  message: "",
  arr: [],
  counter: 1,
  todos: [
    {
      _id: "t1",
      title: "Learning",
      description: "Javascript",
    },
  ],
};

export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (action.type) {
    case "feedback": {
      return {
        ...state,
        feedbacks: [...state.feedbacks, payload],
      };
    }

    case "addTodo": {
      return {
        ...state,
        todos: [...state.todos, payload],
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
