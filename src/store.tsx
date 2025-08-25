import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { fetchApiReducer } from "./features/furniture/fetchApiReducer";
import { furnitureReducer } from "./features/furniture/furnitureReducer";

export const rootReducer = combineReducers({
  apiReducer: fetchApiReducer,
  furnitureReducer,
});

const fetchApi = createStore(rootReducer, applyMiddleware(thunk));
