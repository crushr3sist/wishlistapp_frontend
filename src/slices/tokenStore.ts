import { createSlice } from "@reduxjs/toolkit";
import { setToken } from "../auth/token_handler";

const initialState = {
  token: "",
};
export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    addToken: (state, action) => void (state.token = action.payload),

    removeToken: (state) => {
      localStorage.removeItem("token");
      // Instead of directly modifying the state, modify the draft:
      state.token = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToken, removeToken } = tokenSlice.actions;

export default tokenSlice.reducer;
