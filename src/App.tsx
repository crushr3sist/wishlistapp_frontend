import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <div>
          <button
            aria-label="increment value"
            onClick={() => dispatch(increment())}
          >
            increment
          </button>
          <span>{count}</span>
          <button
            aria-label="decrement value"
            onClick={() => dispatch(decrement())}
          >
            increment
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
