import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  numberOfCakes: 10,
};

const cakeReducer = createSlice({
  name: "cake",
  intialState,
  reducers: {
    buyACake(state) {
      if (state.numberOfCakes > 0) {
        state.numberOfCakes--;
      } else {
        alert("not avaliable!");
      }
    },
    restockedCake(state, action) {
      state.numberOfCakes += action.payload;
    },
  },
});

export const { buyACake, restockedCake } = cakeReducer.actions;
export default cakeReducer.reducer;
