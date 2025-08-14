import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  numberOfIceCreams: 10,
};

const iceCreamReducer = createSlice({
  name: "Icecream",
  intialState,
  reducers: {
    buyAIceCream(state) {
      if (state.numberOfIceCreams > 0) {
        state.numberOfIceCreams--;
      } else {
        alert("not avaliable!");
      }
    },
    restockedIcecream(state, action) {
      state.numberOfIceCreams += action.payload;
    },
  },
});

export const { buyACake, restockedIcecream } = cakeReducer.actions;
export default iceCreamReducer.reducer;
