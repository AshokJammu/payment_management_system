import { ADD_USER, ADD_CATEGORY } from "./actionType";

export const addUser = payload => ({
  type: ADD_USER,
  payload
});

export const addCategory = payload => ({
  type: ADD_CATEGORY,
  payload
});
