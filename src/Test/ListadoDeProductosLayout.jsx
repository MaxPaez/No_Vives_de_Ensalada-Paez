import React, { eseState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
// import "../style-sheets/ListadoDeProductos.css";

function ListadoDeProductosLayout({ productosShop }) {
  return (
    <div className="container">
      {productosShop.map((producto) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={producto.imagen} />
          <Card.Body>
            <Card.Title>{producto.nombre}</Card.Title>
            <Card.Text>{producto.descripcion}</Card.Text>
            <Card.Text>{producto.precio}</Card.Text>
            <Button variant="primary">Comprar</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default ListadoDeProductosLayout;
