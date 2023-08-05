import { configureStore } from "@reduxjs/toolkit";
import tokenStore from "./slices/tokenStore";

export default configureStore({
  reducer: {
    token: tokenStore,
  },
});
