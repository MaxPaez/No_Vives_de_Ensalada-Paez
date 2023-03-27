import { useState } from "react";
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ItemDetail({ detalles }) {
  const [agregado, setAgregado] = useState(0);
  console.log(detalles);

  function onAdd(count) {
    setAgregado(count);
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 100 }}>
      <Card style={{ width: "29rem" }}>
        <Card.Header as="h1" style={{ textAlign: "center" }}>
          {detalles.nombre}
        </Card.Header>
        <Card.Body>
          <Card.Img src={detalles.imagen} />
          <Card.Text as="h4">{detalles.detalle}</Card.Text>
          <Card.Text as="h2" style={{ textAlign: "center" }}>
            Precio: ${detalles.precio}
          </Card.Text>
          <Card.Text as="h6" style={{ textAlign: "center" }}>
            Stock:{detalles.stock}
          </Card.Text>

          <div>
            {agregado == 0 && (
              <ItemCount stock={detalles.stock} onAdd={onAdd} />
            )}
            <div style={{ display: "grid", justifyContent: "center" }}>
              {agregado >= 1 && (
                <Link to="/cart">
                  <Button variant="success">Terminar compra</Button>
                </Link>
              )}
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemDetail;
