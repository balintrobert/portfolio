import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LANGUAGE } from 'shared/enums';

interface UserPreferencesState {
  language: LANGUAGE;
  darkMode: boolean;
}

const initialState: UserPreferencesState = {
  language: LANGUAGE.EN,
  darkMode: false,
};

const userPreferencesSlice = createSlice({
  name: 'userPreferences',
  initialState,
  reducers: {
    toggleDarkMode(state, { payload }: PayloadAction<boolean>) {
      state.darkMode = payload;
    },
  },
});

export const { toggleDarkMode } = userPreferencesSlice.actions;
export default userPreferencesSlice.reducer;
