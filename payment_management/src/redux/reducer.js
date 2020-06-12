import { ADD_USER, ADD_CATEGORY } from "./actionType";

const initState = {
  users: ["ashok", "kiran"],
  category: ["food", "room"]
};

const reducer = (state = initState, { type, payload }) => {
  console.log(state);
  switch (type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, payload]
      };

    case ADD_CATEGORY:
      return {
        ...state,
        category: [...state.category, payload]
      };
    default:
      return state;
  }
};

export default reducer;
