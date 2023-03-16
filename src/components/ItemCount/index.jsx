import { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const ItemCount = ({ stock }) => {
  const [counter, setCounter] = useState(1);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ButtonGroup
        aria-label="Basic example"
        style={{ alignItems: "baseline" }}
      >
        <Button
          variant="success"
          onClick={() => setCounter(counter - 1)}
          disabled={counter <= 0}
        >
          -
        </Button>

        <p
          style={{
            borderStyle: "solid",
            borderColor: "green",
            padding: 4,
            paddingInline: 14,
          }}
        >
          {counter}
        </p>

        <Button variant="success" onClick={() => setCounter(counter + 1)}>
          +
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ItemCount;
