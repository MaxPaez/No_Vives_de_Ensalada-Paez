import React from "react";
import Container from "react-bootstrap/Container";
import "./ItemListContainer.css";

function ItemListContainer({ greeting }) {
  return (
    <Container className="mt-5">
      <h1>
        Bienvenido
        <br />a<br />
        {greeting}
      </h1>
    </Container>
  );
}

export default ItemListContainer;
