import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/Auth/authSlice';
import feedReducer from '../features/Feed/feedSlice';
import feedUploadReducer from '../features/Feed/feedUploadSlice';
import singleFetchReducer from '../features/Feed/singleFetchSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    feed: feedReducer,
    feedUpload: feedUploadReducer,
    id: singleFetchReducer,
  },
});
