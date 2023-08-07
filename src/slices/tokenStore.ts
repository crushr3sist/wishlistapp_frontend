import { createSlice } from "@reduxjs/toolkit";
import { setToken, setTokenExpire } from "../auth/token_handler";

const initialState = {
  token: "",
  expire: "",
};

const date = Date.now();
const timeDiff = 60 * 60 * 24 * 30;
const expTime = date / 1000 + timeDiff;

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    addToken: (state, action) =>
      void ((state.token = action.payload), setToken(action.payload)),

    setExpire: (state) =>
      void ((state.expire = expTime.toString()), setTokenExpire(state.expire)),

    removeToken: (state) => {
      void ((state.token = ""),
      (state.expire = ""),
      localStorage.removeItem("token"),
      localStorage.removeItem("token-expire"));
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToken, removeToken, setExpire } = tokenSlice.actions;

export default tokenSlice.reducer;
