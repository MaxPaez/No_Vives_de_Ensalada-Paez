import { useContext, useState } from "react";
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Context } from "../../context";

function ItemDetail({ product }) {
  const { onAdd } = useContext(Context);
  const [added, setAdded] = useState(0);

  function onAddProduct(count) {
    setAdded(count);
    onAdd(product, count);
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 100 }}>
      <Card style={{ width: "29rem" }}>
        <Card.Header
          as="h1"
          style={{
            fontFamily: "Teko, sans-serif",
            color: "#F45303",
            fontSize: "3em",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {product.nombre}
        </Card.Header>

        <Card.Body
          style={{ fontFamily: "Comfortaa, cursive", fontWeight: "bold" }}
        >
          <Card.Img src={product.imagen} />

          <Card.Text
            as="h4"
            style={{ fontWeight: "bolder", marginBlock: "0.5em" }}
          >
            {product.detalle}
          </Card.Text>

          <Card.Text as="h2" style={{ textAlign: "center" }}>
            Precio: ${product.precio}
          </Card.Text>

          <Card.Text as="h6" style={{ textAlign: "center" }}>
            Stock:{product.stock}
          </Card.Text>

          <div>
            {added == 0 && (
              <ItemCount stock={product.stock} onAdd={onAddProduct} />
            )}

            <div style={{ display: "grid", justifyContent: "center" }}>
              {added >= 1 && (
                <div>
                  <Link to="/" style={{ margin: "1em" }}>
                    <Button variant="success">Seguir comprando</Button>
                  </Link>

                  <Link to="/cart" style={{ margin: "1em" }}>
                    <Button variant="success">Terminar compra</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemDetail;
