import React from "react";
import { Container } from "react-bootstrap";

function ItemListContainer({ greeting }) {
  return (
    <Container className="mt-5">
      <h1>{greeting}</h1>
    </Container>
  );
}

export default ItemListContainer;
