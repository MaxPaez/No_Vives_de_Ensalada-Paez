import Item from "./Item";

function ItenList({ productos }) {
  console.log(productos);
  return (
    <div>
      <ul>
        {productos.map((producto, index) => (
          <Item producto={producto} />
        ))}
        hola
        {/* {productos.map((producto, index) => (
          <Item producto={producto} key={producto.id} />
        ))} */}
      </ul>
    </div>
  );
}

export default ItenList;
