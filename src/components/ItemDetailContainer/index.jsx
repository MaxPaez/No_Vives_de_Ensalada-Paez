import ItemDetail from "../ItemDetail";
import { useState, useEffect } from "react";
import Productos from "../../mocks/productos";

function ItemDetailContainer({ itemRoute, itemId }) {
  const [detalles, setDetalles] = useState(null);

  useEffect(() => {
    const promesaDetalle = new Promise((resolve, reject) =>
      setTimeout(() => resolve(Productos), 2000)
    );

    promesaDetalle
      .then((response) => {
        if (itemId) {
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
      {detalles ? (
        <ItemDetail detalles={detalles} />
      ) : (
        <div
          style={{
            textAlign: "center",
            fontSize: 40,
            fontWeight: "bold",
            marginTop: 100,
          }}
        >
          <span>Cargando...</span>
        </div>
      )}
    </div>
  );
}
export default ItemDetailContainer;
