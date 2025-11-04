import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
  darkMode: boolean;
}

const initialState: ThemeState = {
  darkMode: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    enableDarkMode: (state) => {
      state.darkMode = true;
    },
    disableDarkMode: (state) => {
      state.darkMode = false;
    },
  },
});

export const { toggleDarkMode, enableDarkMode, disableDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
