import ItemDetail from "../ItemDetail";
import { useState, useEffect } from "react";
import Productos from "../../mocks/productos";
import { Container } from "react-bootstrap";

function ItemDetailContainer({ itemRoute, itemId }) {
  const [detalles, setDetalles] = useState({});

  useEffect(() => {
    const promesaDetalle = new Promise((resolve, reject) =>
      setTimeout(() => resolve(Productos), 2000)
    );

    promesaDetalle
      .then((response) => {
        if (itemRoute) {
          const productoEncontrado = response.find(
            (element) => element.id == itemId
          );
          setDetalles(productoEncontrado);
        } else {
          setDetalles("El producto no fue encontrado");
        }
      })
      .catch((err) => console.log(err));
  }, [itemId]);

  return (
    <div>
      <ItemDetail detalles={detalles} />
    </div>
  );
}
export default ItemDetailContainer;
