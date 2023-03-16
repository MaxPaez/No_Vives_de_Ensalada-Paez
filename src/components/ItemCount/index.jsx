import { useState } from "react";

const ItemCount = ({ stock }) => {
  const [counter, setCounter] = useState(1);

  return (
    <div>
      <button onClick={() => setCounter(counter - 1)} disabled={counter <= 0}>
        {" "}
        -{" "}
      </button>
      <p>{counter}</p>
      <button
        onClick={() => setCounter(counter + 1)}
        disabled={counter >= stock}
      >
        {" "}
        +{" "}
      </button>
    </div>
  );
};

export default ItemCount;
