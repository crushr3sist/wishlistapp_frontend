import { Button } from "@mui/material";
import store from "../store";
import { useNavigate } from "react-router-dom";

const Priv = () => {
  const state = store.getState();
  const navigate = useNavigate();

  const date = new Date(parseInt(state.token.expire));

  console.log(date);

  return (
    <div>
      <h1>hello</h1>
      <Button
        onClick={() => {
          navigate("/logout");
        }}
      >
        logout
      </Button>
    </div>
  );
};

export default Priv;
