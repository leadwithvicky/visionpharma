import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './theameSlice';
import userSlice from './userSlice';


export const store = configureStore({
  reducer: {
    theme: themeReducer,
    currentUser: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
