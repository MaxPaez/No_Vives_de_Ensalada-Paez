import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Item({ producto }) {
  console.log({ producto });

  return (
    <Card style={{ width: "15em" }}>
      <Card.Img src={producto.imagen} />
      <Card.Title>{producto.nombre}</Card.Title>
      <Card.Title>${producto.precio}</Card.Title>
      <Button variant="outline-success">Agregar </Button>
    </Card>
  );
}

export default Item;
