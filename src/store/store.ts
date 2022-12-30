import { configureStore } from '@reduxjs/toolkit';
import userPreferencesReducer from '../store/user-preferences/user-preferences-slice';

export const store = configureStore({
  reducer: {
    userPreferences: userPreferencesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
