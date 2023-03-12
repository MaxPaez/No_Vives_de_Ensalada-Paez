import Productos from "../../mocks/productos";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer({ isDetailRoute, datailId }) {
  const [productos, setProductos] = useState({});

  useEffect(() => {
    const detalleProductos = new Promise((resolve, reject) =>
      resolve(Productos)
    );

    detalleProductos
      .then((response) => {
        if (isCategoryRoute) {
          const encontrarProducto = response.find(
            (producto) => producto.id === datailId
          );

          setProductos(encontrarProducto);
        } else {
          setProductos(response);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    (
      <div>
        <ItemDetail productos={productos} />
      </div>
    ),
    (<div>Item Detail Container</div>)
  );
}

export default ItemDetailContainer;
