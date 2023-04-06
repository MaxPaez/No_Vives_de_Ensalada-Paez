import { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  return (
    <div style={{ display: "grid", justifyContent: "center" }}>
      <ButtonGroup
        aria-label="Basic example"
        style={{ alignItems: "baseline" }}
      >
        <Button
          variant="success"
          onClick={() => setCount((prevState) => prevState - 1)}
          disabled={count < 2}
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
          {count}
        </p>

        <Button
          variant="success"
          onClick={() => setCount((prevState) => prevState + 1)}
          disabled={count === stock}
        >
          +
        </Button>
      </ButtonGroup>

      <Button variant="success" onClick={() => onAdd(count)}>
        Añadir al carrito
      </Button>
    </div>
  );
};

export default ItemCount;
