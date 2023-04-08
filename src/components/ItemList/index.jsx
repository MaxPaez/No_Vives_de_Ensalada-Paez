import Item from "../Item";

function ProductGroup({ categoria, products }) {
  function showCategoryTitle(categoria) {
    const titles = {
      platoPrincipal: "Plato Principal",
      guarnicion: "Guarnición",
      bebida: "Bebidas",
    };

    const title = titles[categoria] || "";

    if (title !== "") {
      return (
        <h2
          style={{
            backgroundColor: "#CAF1C1",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: "5em",
            fontFamily: "Teko, sans-serif",
            color: "#F45303",
          }}
        >
          {title}
        </h2>
      );
    }
  }

  return (
    <div style={{ marginBlockEnd: "3em" }}>
      {showCategoryTitle(categoria)}
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
