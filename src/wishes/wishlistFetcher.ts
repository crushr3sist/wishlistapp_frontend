import axios from "axios";
import store from "../store";
import { useDispatch } from "react-redux";
import { setRecords } from "../slices/wishlistStore";
const state = store.getState();

export const getWishlists = async () => {
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
