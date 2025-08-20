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
            i.id === item.id ? { ...i , quantity: i.quantity + 1 } : i
          ),
        };
      } else {
        return {
          cart: [...state.cart, { ...item , quantity: 1 }],
        };
      }
    case REMOVE_FROM_THE_CART:
      return {
        ...state,
        cart: state.cart.filter((i) => i.id !== action.payload),
      };

    default:
      return state;
  }
};
