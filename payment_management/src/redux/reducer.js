import { ADD_USER, ADD_CATEGORY } from "./actionType";

const initState = {
  users: [],
  category: []
};

const reducer = (state = initState, { type, payload }) => {
  console.log(state, "use");
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
