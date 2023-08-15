import axios from "axios";
import store from "../store";
import { useDispatch } from "react-redux";
import { setRecords } from "../slices/wishlistStore";

export const getWishlists = async () => {
  const state = store.getState();
  console.log(state.token.token);
  try {
    const response = await axios.post(
      "http://localhost:8000/wishlist/get/all",
      new URLSearchParams({
        token: state.token.token,
      })
    );

    return response.data.all;
  } catch (error) {
    console.log(error);
    return null; // You can handle error cases and return appropriate values
  }
};
