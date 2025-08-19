import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { fetchApiReducer } from "./features/furniture/fetchApiReducer";
import { furnitureReducer } from "./features/furniture/furnitureReducer";

const fetchApi = createStore(fetchApiReducer, applyMiddleware(thunk));

export const rootReducer = {
  apiReducer: fetchApi,
  furnitureReducer,
};
