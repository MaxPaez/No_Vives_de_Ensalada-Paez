import Item from "../Item";

function ItenList({ productos }) {
  return (
    <div>
      <ul>
        {productos.map((producto) => (
          <Item key={producto.id} producto={producto} />
        ))}
      </ul>
    </div>
  );
}

export default ItenList;
