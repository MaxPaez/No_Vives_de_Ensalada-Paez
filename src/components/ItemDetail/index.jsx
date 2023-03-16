import ItemCount from "../ItemCount";

function ItemDetail({ detalles }) {
  console.log(detalles.imagen);
  return (
    <div>
      <h1>{detalles.nombre}</h1>
      <img src={detalles.imagen} />
      <h3>{detalles.detalle}</h3>

      <ItemCount stock={""} />
    </div>
  );
}

export default ItemDetail;
