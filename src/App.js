import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./redux/features/counter";

function App() {
  const value = useSelector((store) => store.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Redux Toolkit</h1>
      <div className="container">
        <h1>{value}</h1>
        <div className="btns">
          <button
            className="dec"
            onClick={() => {
              dispatch(decrement());
            }}
          >
            -
          </button>
          <button
            className="reset"
            onClick={() => {
              dispatch(reset());
            }}
          >
            [Reset]
          </button>
          <button
            className="inc"
            onClick={() => {
              dispatch(increment());
            }}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
