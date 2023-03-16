import ItemCount from "../ItemCount";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

function ItemDetail({ detalles }) {
  return (
    <Container>
      <Card style={{ width: "29rem" }}>
        <Card.Header as="h1" style={{ textAlign: "center" }}>
          {detalles.nombre}
        </Card.Header>
        <Card.Body>
          <Card.Img src={detalles.imagen} />
          <Card.Text as="h4">{detalles.detalle}</Card.Text>
          <ItemCount stock={""} />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ItemDetail;
