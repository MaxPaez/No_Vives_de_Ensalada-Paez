import ItemDetail from "../ItemDetail";
import { useState, useEffect } from "react";

import { doc, getDoc, getFirestore } from "firebase/firestore";

function ItemDetailContainer({ itemId }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, "items", itemId);
    getDoc(itemRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProduct({ id: snapshot.id, ...snapshot.data() });
        }
      })
      .catch((error) => console.log({ error }));
  }, []);

  return (
    <div>
      {product ? (
        <ItemDetail product={product} />
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
