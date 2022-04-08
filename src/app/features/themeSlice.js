import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkTheme: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDarkTheme: (state, action) => {
      state.darkTheme = !state.darkTheme;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleDarkTheme } = themeSlice.actions;

export default themeSlice.reducer;
