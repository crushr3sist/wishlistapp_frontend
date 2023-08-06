import { useSelector } from "react-redux";
import store from "./store";

const Priv = () => {
  const state = store.getState();

  const date = new Date(parseInt(state.token.expire));

  console.log(date);

  return <div>hello </div>;
};

export default Priv;
