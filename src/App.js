
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <h1> Counter App </h1>
      <p> Count:{count} </p>
      <button onClick={handleIncrement}> Increment</button>
      <button onClick={handleDecrement}> Decrement</button>
    </div>
  );
}
