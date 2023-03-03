import Productos from "../mocks/productos";
import { useState, useEffect } from "react";
import ItenList from "./ItenList";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const promesaProductos = new Promise((resolve, reject) =>
      setTimeout(() => resolve(Productos))
    );

    promesaProductos
      .then((response) => setProductos(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ItenList productos={productos} />
    </div>
  );
}

export default ItemListContainer;
