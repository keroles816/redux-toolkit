import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./features/cake/cakeReducer";
import iceCreamReducer from "./features/Icecream/IceCream";

const store = configureStore({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
