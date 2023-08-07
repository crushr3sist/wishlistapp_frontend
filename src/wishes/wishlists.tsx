import { useEffect, useState } from "react";
import store from "../store";
import { useDispatch } from "react-redux";
import { setRecords } from "../slices/wishlistStore";
import { dataExists, getWishlists } from "./wishlistFetcher";
import { fetchToken } from "../auth/token_handler";

export const Wishlists = () => {
  return (
    <>
      <button onClick={getWishlists}>fetch</button>
    </>
  );
};
