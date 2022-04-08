import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    showMobileMenu: false,
  },
  reducers: {
    setShowMobileMenu: (state, action) => {
      state.showMobileMenu = !action.payload;
    },
  },
});

export const { setShowMobileMenu } = menuSlice.actions;
export default menuSlice.reducer;
