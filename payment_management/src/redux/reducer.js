import { ADD_USER, ADD_CATEGORY } from "./actionType";
import { v4 as uuidv4 } from "uuid";
const initState = {
  users: [],
  category: []
};

const reducer = (state = initState, { type, payload }) => {
  console.log(state, "use");
  switch (type) {
    case ADD_USER:
      const user = {
        ...payload,
        id: uuidv4()
      };
      return {
        ...state,
        users: [...state.users, user]
      };

    case ADD_CATEGORY:
      const category = {
        ...payload,
        id: uuidv4()
      };
      return {
        ...state,
        category: [...state.category, category]
      };
    default:
      return state;
  }
};

export default reducer;
