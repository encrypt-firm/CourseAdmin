import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/Auth/authSlice';
import feedReducer from '../features/Feed/feedSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    feed: feedReducer
  },
});
