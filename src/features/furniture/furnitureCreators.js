import { ADD_TO_THE_CART } from "../furnitureAction";
import { REMOVE_FROM_THE_CART } from "../furnitureAction";
import { FETCH_FURNITURE_REQUEST } from "../furnitureAction/FETCH_FURNITURE_REQUEST";
import { FETCH_FURNITURE_SUCCESS } from "../furnitureAction/FETCH_FURNITURE_SUCCESS";
import { FETCH_FURNITURE_ERORR } from "../furnitureAction/FETCH_FURNITURE_ERORR";

export const addToCart = (item) => {
  return {
    type: ADD_TO_THE_CART,
    payload: item,
  };
};

export const removeFromCart = (number) => {
  return {
    type: REMOVE_FROM_THE_CART,
    payload: number,
  };
};

//fetched api

export const FeatchFurnitureSuccess = (data) => {
  return {
    type: FETCH_FURNITURE_SUCCESS,
    payload: data,
  };
};

export const FeatchFurnitureRequest = () => {
  return {
    type: FETCH_FURNITURE_REQUEST,
  };
};

export const FeatchFurnitureErorr = (data) => {
  return {
    type: FETCH_FURNITURE_ERORR,
    payload: data,
  };
};
