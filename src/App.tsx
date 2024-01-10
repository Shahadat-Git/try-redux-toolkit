import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const { count } = useAppSelector((state) => state.counterReducer);
  const dispatch = useAppDispatch();
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className=" bg-slate-300 flex items-center border-2 rounded-md border-purple-500 p-20">
        <button
          onClick={() => dispatch(increment())}
          className="bg-green-500 p-5 m-5  rounded-md text-white text-xl font-semibold"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(incrementByValue(5))}
          className="bg-green-500 p-5 m-5  rounded-md text-white text-xl font-semibold"
        >
          Increment 5
        </button>
        <h1 className="text-white text-5xl">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-500 p-5 m-5  rounded-md text-white text-xl font-semibold"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
