import Productos from "../../mocks/productos";
import { useState, useEffect } from "react";
import ItenList from "../ItemList";

function ItemListContainer({ isCategoryRoute, categoryId }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const promesaProductos = new Promise((resolve, reject) =>
      setTimeout(() => resolve(Productos), 2000)
    );

    promesaProductos
      .then((response) => {
        if (isCategoryRoute) {
          const productosFiltrados = response.filter(
            (producto) => producto.categoria === categoryId
          );

          setProductos(productosFiltrados);
        } else {
          setProductos(response);
        }
      })
      .catch((err) => console.log(err));
  }, [categoryId]);

  return (
    <div style={{ marginTop: 100 }}>
      <ItenList productos={productos} />
    </div>
  );
}

export default ItemListContainer;
