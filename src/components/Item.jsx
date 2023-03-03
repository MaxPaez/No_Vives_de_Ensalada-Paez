function Item({ producto }) {
  console.log({ producto });

  return (
    <div>
      <div>{producto.name}</div>
      <img src={producto.imagen} />
      id5-wrap-huerta-mix.jpg
    </div>
  );
}

export default Item;
