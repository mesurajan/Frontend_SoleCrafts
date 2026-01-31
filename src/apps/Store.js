import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './Reducers/cartSlice';

export const store = configureStore({
  reducer: {

    cart: cartSlice, 

  },
});

