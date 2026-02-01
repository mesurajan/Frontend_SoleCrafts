import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Reducers/cartSlice";


export const store = configureStore({
  reducer: {
    cart: cartReducer,

  },
});

