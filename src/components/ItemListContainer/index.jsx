import { useState, useEffect } from "react";
import ItenList from "../ItemList";
import {
  collection,
  getFirestore,
  getDocs,
  query,
  where,
} from "firebase/firestore";

function ItemListContainer({ isCategoryRoute, categoryId }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, "items");

    if (isCategoryRoute) {
      const queryResult = query(
        itemCollection,
        where("categoria", "==", categoryId)
      );

      getDocs(queryResult)
        .then((snapshot) => {
          const docs = snapshot.docs;
          setProductos(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        })
        .catch((error) => console.log({ error }));
    } else {
      getDocs(itemCollection)
        .then((snapshot) => {
          const docs = snapshot.docs;
          setProductos(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        })
        .catch((error) => console.log({ error }));
    }
  }, [categoryId]);

  return (
    <div style={{ marginTop: 100 }}>
      <ItenList productos={productos} />
    </div>
  );
}

export default ItemListContainer;
