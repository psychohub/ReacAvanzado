import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import advertsReducer from './advertsSlice';

const store = configureStore({
  reducer: {
    auth: userReducer,
    adverts: advertsReducer,
  },
});

export default store;
