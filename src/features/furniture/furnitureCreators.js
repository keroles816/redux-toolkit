import { ADD_TO_THE_CART } from "../furnitureAction";
import { REMOVE_FROM_THE_CART } from "../furnitureAction";

export const addToCart = (number) => {
  return {
    type: ADD_TO_THE_CART,
    payload: number,
  };
};

export const removeFromCart = (number) => {
  return {
    type: REMOVE_FROM_THE_CART,
    payload: number,
  };
};
