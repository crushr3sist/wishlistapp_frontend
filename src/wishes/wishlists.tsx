import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRecords } from "../slices/wishlistStore";
import { getWishlists } from "./wishlistFetcher";
import { CardHeader, Card, CardBody } from "@nextui-org/react";
import NavBar from "./navbar";
import { useNavigate } from "react-router-dom";
import "./wishlists.scss";
export const Wishlists = () => {
  const wishLists = useSelector((state) => state.wishlists.wishLists);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [fetched, setFetched] = useState(false);

  const fetchWishlists = async () => {
    const wishlistData = await getWishlists();
    console.log(wishlistData);
    if (wishlistData) {
      dispatch(setRecords(wishlistData));
    }
  };

  useEffect(() => {
    fetchWishlists();
    setFetched(true);
  }, []);

  useEffect(() => {
    if (wishLists === null) {
      console.log("Data was not fetched");
    } else {
      console.log("Data was fetched");
      console.log(wishLists);
    }
  }, [wishLists]);

  return (
    <div>
      <NavBar />
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
        <>{navigate("/wishlists")}</>
      )}
    </div>
  );
};
