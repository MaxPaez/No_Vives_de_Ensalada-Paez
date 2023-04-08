import ItemDetail from "../ItemDetail";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { doc, getDoc, getFirestore } from "firebase/firestore";

function ItemDetailContainer({ itemId }) {
  const [product, setProduct] = useState(null);
  const [productExists, setProductExists] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, "items", itemId);
    getDoc(itemRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProduct({ id: snapshot.id, ...snapshot.data() });
          setProductExists(true);
        } else {
          setProductExists(false);
        }
      })
      .catch((error) => console.log({ error }));
  }, []);

  return (
    <div>
      {productExists ? (
        product ? (
          <ItemDetail product={product} />
        ) : (
          <div
            style={{
              textAlign: "center",
              fontSize: "3em",
              fontWeight: "bold",
              marginTop: "2.5em",
            }}
          >
            <span>Cargando...</span>
          </div>
        )
      ) : (
        <div
          style={{
            display: "grid",
            textAlign: "center",
            fontSize: "3em",
            fontWeight: "bold",
            marginTop: "2.5em",
            fontFamily: "Comfortaa",
          }}
        >
          <span>No contamos con ese producto</span>
          <Link to="/">
            <Button variant="success" className="mt-3">
              Volver a la tienda
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
export default ItemDetailContainer;
