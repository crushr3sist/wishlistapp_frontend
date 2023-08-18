import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRecords } from "../slices/wishlistStore";
import { getWishlists } from "./wishlistFetcher";
import { CardHeader, Card, CardBody } from "@nextui-org/react";
import NavBar from "./navbar";
import { useNavigate } from "react-router-dom";
import "./wishlists.scss";
import store from "../store";
export const Wishlists = () => {
  const state = store.getState();
  const wishLists = state.wishlists.wishLists;
  const dispatch = useDispatch();
  const [fetched, setFetched] = useState(false);
  const [doesDataExist, setDoesDataExist] = useState(false);

  const fetchWishlists = async () => {
    const wishlistData: [] = await getWishlists();
    console.log(wishlistData);
    if (wishlistData) {
      dispatch(setRecords(wishlistData));
    }
  };

  useEffect(() => {
    fetchWishlists();
  }, []);

  useEffect(() => {
    if (wishLists === null || Object.keys(wishLists).length === 0) {
      console.log("Theres no data");
      setDoesDataExist(false);
      setFetched(false);
    } else {
      console.log("Data was fetched");
      console.log(wishLists);
      setDoesDataExist(true);
      setFetched(true);
    }
  }, [wishLists]);

  return (
    <div>
      <NavBar />
      <div>
        {doesDataExist ? (
          <>
            <div>
              {fetched ? (
                wishLists.map((wishList) => (
                  <Card className="listcard" key={wishList.id}>
                    <CardHeader>{wishList.wishlistName}</CardHeader>
                    <CardBody>
                      <ul>
                        {wishList.WishlistItem.map((item) => (
                          <li key={item.id}>
                            <p>Product: {item.product}</p>
                            <p>
                              URL: <a href={item.url}> {item.url}</a>
                            </p>
                            <p>Date: {item.date}</p>
                            <p>Price: {item.current_price}</p>
                          </li>
                        ))}
                      </ul>
                    </CardBody>
                  </Card>
                ))
              ) : (
                <>Data Was Not Fetched</>
              )}
            </div>
          </>
        ) : (
          <>
            <h1>There's no wishlists</h1>
          </>
        )}
      </div>
    </div>
  );
};
