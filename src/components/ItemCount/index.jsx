import { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const ItemCount = ({ stock, onAdd }) => {
  const [counter, setCounter] = useState(1);

  return (
    <div style={{ display: "grid", justifyContent: "center" }}>
      <ButtonGroup
        aria-label="Basic example"
        style={{ alignItems: "baseline" }}
      >
        <Button
          variant="success"
          onClick={() => setCounter((prevState) => prevState - 1)}
          disabled={counter < 2}
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

        <Button
          variant="success"
          onClick={() => setCounter((prevState) => prevState + 1)}
          disabled={counter === stock}
        >
          +
        </Button>
      </ButtonGroup>
      <Button variant="success" onClick={() => onAdd(counter)}>
        Añadir al carrito
      </Button>
    </div>
  );
};

export default ItemCount;
