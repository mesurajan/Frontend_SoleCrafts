import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './Reducers/CartSlice';


export const store = configureStore({
  reducer: {

    cart: cartSlice, 

  },
});
