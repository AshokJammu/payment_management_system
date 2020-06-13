import { ADD_USER, ADD_CATEGORY, ADD_INCOME, ADD_EXPENSES } from "./actionType";

export const addUser = payload => ({
  type: ADD_USER,
  payload
});

export const addCategory = payload => ({
  type: ADD_CATEGORY,
  payload
});

export const addIncome = payload => ({
  type: ADD_INCOME,
  payload
});

export const addExpenses = payload => ({
  type: ADD_EXPENSES,
  payload
});
