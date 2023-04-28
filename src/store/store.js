import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice.js";

export const store = configureStore({
  reducer: {
    // название редюсера = user
    user: userReducer,
  },
});
