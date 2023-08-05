import { useSelector } from "react-redux";
import store from "./store";

export default function Priv() {
  const state = store.getState();
  console.log(state);
  return <div>hello </div>;
}
