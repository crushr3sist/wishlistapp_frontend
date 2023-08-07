/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import axios from "axios";
import store from "../store";
import { useDispatch } from "react-redux";
import { setRecords } from "../slices/wishlistStore";
const state = store.getState();

export const getWishlists = async (token) => {
  const response = await axios.get("http://localhost:8000/wishlist/get/all", {
    data: new URLSearchParams({
      token: token,
    }),
  });
  console.log(response);
  return response;
};

export const dataExists = async () => {
  if (state.wishlists.wishLists.length == 0) {
    return false;
  } else {
    return true;
  }
};
