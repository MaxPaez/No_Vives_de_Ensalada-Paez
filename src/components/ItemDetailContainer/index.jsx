import ItemDetail from "../ItemDetail";
import { useState, useEffect } from "react";
import Productos from "../../mocks/productos";

function ItemDetailContainer({ isItemRoute, itemId }) {
  const [detalles, setDetalles] = useState({});

  useEffect(() => {
    const promesaDetalle = new Promise((resolve, reject) => {
      resolve(Productos);
    });

    promesaDetalle
      .then((response) => {
        if (isItemRoute) {
          const productoEncontrado = response.find(
            (item) => item.id === itemId
          );
          setDetalles(productoEncontrado);
        } else {
          setDetalles(<h2>El producto no fue encontrado</h2>);
        }
      })
      .catch((err) => console.log(err));
  }, [itemId]);

  return (
    <div>
      <div>Item Dateil Container</div>
      <ItemDetail items={detalles} />
    </div>
  );
}

export default ItemDetailContainer;
