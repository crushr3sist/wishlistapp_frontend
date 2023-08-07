import NavBar from "./navbar";
import { Input, Button } from "@nextui-org/react";
import "./dashboard.scss";
import { useNavigate } from "react-router-dom";
const UserDashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <Button
        onClick={() => {
          navigate("/wishlists");
        }}
      >
        wishlists
      </Button>
      <div className="divsContainer">
        <div className="creationDiv">
          <Input className="inputs" type="text" label="wishlist name" />
          <Input className="inputs" type="text" label="product" />
          <Input className="inputs" type="text" label="url" />
          <Input className="inputs" type="text" label="date" />
          <Input className="inputs" type="text" label="current_price" />
          <Input className="inputs" type="text" label="Wishlist" />
        </div>
        <div className="dataDispDiv"></div>
      </div>
    </>
  );
};

export default UserDashboard;
