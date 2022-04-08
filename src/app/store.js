import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice";
import menuReducer from "./features/menuSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    menu: menuReducer,
  },
});
