import Item from "../Item";

function ItenList({ productos }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
}

export default ItenList;
