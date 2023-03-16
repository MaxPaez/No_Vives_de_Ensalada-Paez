import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";

function Item({ producto }) {
  return (
    <Card style={{ width: "15em", margin: "1em" }} fluid>
      <Card.Img
        src={producto.imagen}
        style={{ minHeight: "10em", maxHeight: "10em", overflow: "hidden" }}
      />
      <Card.Title>{producto.nombre}</Card.Title>
      <Card.Title>${producto.precio}</Card.Title>
      <Button className="m-3" variant="success">
        <NavLink
          style={{ textDecoration: "none", color: "white" }}
          to={`/item/${producto.id}`}
        >
          + info
        </NavLink>
      </Button>
    </Card>
  );
}

export default Item;
