import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  phone: null,
  token: null,
  email: null,
  id: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.phone = action.payload.phone;
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.phone = null;
      state.token = null;
      state.email = null;
      state.id = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
