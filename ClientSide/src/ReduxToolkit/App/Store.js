import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from '../Features/AuthSlice.js';
import CartSlice from '../Features/CartSlice.js';

export const store = configureStore({
  reducer: {
    AuthReducer: AuthSlice,
    CartReducer: CartSlice,
  }
});

export default store;
