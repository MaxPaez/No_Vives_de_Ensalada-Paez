import Item from "../Item";

function ProductGroup({ categoria, products }) {
  return (
    <div>
      <h2>{categoria}</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((producto) => (
          <Item key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
}

function ItemList({ productos }) {
  const productGroups = productos.reduce((groups, producto) => {
    const categoria = producto.categoria;
    if (!groups[categoria]) {
      groups[categoria] = [];
    }
    groups[categoria].push(producto);
    return groups;
  }, {});

  return (
    <div>
      {Object.keys(productGroups).map((categoria) => (
        <ProductGroup
          key={categoria}
          categoria={categoria}
          products={productGroups[categoria]}
        />
      ))}
    </div>
  );
}

export default ItemList;
