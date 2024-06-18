import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import advertsReducer from './advertsSlice';

const store = configureStore({
  reducer: {
    auth: userReducer,
    adverts: advertsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
