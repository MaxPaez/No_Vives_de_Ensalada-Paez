import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { RiShoppingBasketFill } from "react-icons/ri";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "./item.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function Item({ producto }) {
  return (
    <Card className="card-custom my-4 mx-auto">
      <Card.Img variant="top" src={producto.imagen} />

      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          ${producto.precio}
        </Card.Subtitle>
        <ButtonGroup>
          <Button variant="info">
            <RiShoppingBasketFill
              className="iconoCarro"
              style={{ color: "white" }}
            />
          </Button>

          <Button variant="info">
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to={`/item/${producto.id}`}
            >
              Ver +
            </NavLink>
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
}

export default Item;
