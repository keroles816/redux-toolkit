import { initialState } from "./intialState";

const furnitureReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_THE_CART:
      const item = action.payload;
      const avalibality = state.cart.map((i) => i.id === item.id);

      if (avalibality) {
        //if is avaliable i need to take the object and add to cart with quantity.
        return {
          ...state,
          cart: state.cart.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      } else {
        return {};
      }
  }
};
