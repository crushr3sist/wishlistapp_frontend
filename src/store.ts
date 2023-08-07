import { configureStore } from "@reduxjs/toolkit";
import tokenStore from "./slices/tokenStore";
import wishlistStore from "./slices/wishlistStore";

export default configureStore({
  reducer: {
    token: tokenStore,
    wishlists: wishlistStore,
  },
});
