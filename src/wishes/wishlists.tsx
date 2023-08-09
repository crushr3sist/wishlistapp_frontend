import { useEffect, useState } from "react";
import store from "../store";
import { useDispatch } from "react-redux";
import { setRecords } from "../slices/wishlistStore";
import { dataExists, getWishlists } from "./wishlistFetcher";

export const Wishlists = () => {
  const dispatch = useDispatch();
  const data = async () => {
    await getWishlists()
      .then((wishlistData) => {
        console.log(wishlistData);
        dispatch(setRecords(wishlistData));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    data();
  });
  return (
    <>
      <button onClick={() => {}}>fetch</button>
    </>
  );
};
