import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Item({ producto }) {
  return (
    <Card style={{ width: "15em" }} fluid>
      <Card.Img
        src={producto.imagen}
        style={{ minHeight: "10em", maxHeight: "10em", overflow: "hidden" }}
      />
      <Card.Title>{producto.nombre}</Card.Title>
      <Card.Title>${producto.precio}</Card.Title>
      <Button className="m-3" variant="success">
        Agregar{" "}
      </Button>
    </Card>
  );
}

export default Item;
