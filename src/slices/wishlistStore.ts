import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishLists: [],
};

export const WishlistSlice = createSlice({
  name: "wishlists",
  initialState,
  reducers: {
    setRecords: (state, action) => {
      state.wishLists = action.payload;
    },
  },
});

export const { setRecords } = WishlistSlice.actions;

export default WishlistSlice.reducer;
