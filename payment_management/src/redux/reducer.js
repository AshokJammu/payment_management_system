import { ADD_USER, ADD_CATEGORY, ADD_INCOME, ADD_EXPENSES } from "./actionType";
import { v4 as uuidv4 } from "uuid";
const initState = {
  users: [],
  category: [],
  budget: []
};

const reducer = (state = initState, { type, payload }) => {
  // console.log(state, "use");
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

    case ADD_INCOME:
      console.log(state, "dda");
      const amounts = state.budget.map(item => item.amount);
      //amounts = Number(amounts);
      const total = amounts.reduce((acc, item) => (acc += Number(item)), 0);
      console.log(total, "total");
      // const income = {
      //   ...payload,
      //   amount: state.amount + Number(payload),
      //   id: uuidv4()
      // };
      return {
        ...state,
        budget: [...state.budget, payload]
      };

    case ADD_EXPENSES:
      return {
        ...state,
        budget: state.budget.filter(item => item.id !== payload)
        // budget: [...state.category, payload]
      };
    default:
      return state;
  }
};

export default reducer;
