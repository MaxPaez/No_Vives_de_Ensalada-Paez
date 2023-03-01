import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./ItemListContainer.css";

function ItemListContainer({ greeting }) {
  const [contarUnidades, setContarUnidades] = useState(0);

  return (
    <Container className="mt-5">
      <h1>
        Bienvenido
        <br />a<br />
        {greeting}
      </h1>

      <div className="ContenedorCards">
        <div className="CardBody">
          <div className="ImgCard"></div>
          <div className="BtnCantidadItems">
            <Button
              className="BtnSumar"
              onClick={() => {
                setContarUnidades(contarUnidades - 1);
              }}
            >
              -
            </Button>
            <div>{contarUnidades}</div>
            <Button
              className="BtnRestar"
              onClick={() => {
                setContarUnidades(contarUnidades + 1);
              }}
            >
              +
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ItemListContainer;
