import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context";
import { Button, Container } from "react-bootstrap";
import {
  collection,
  getFirestore,
  addDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

function Cart() {
  const { productsAdded, clear, removeItem } = useContext(Context);
  const db = getFirestore();

  const total = productsAdded.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.precio * currentValue.quantity,
    0
  );

  function sendOrder() {
    const valorTotal = total;

    const order = {
      buyer: { nombre: "Max", email: "max@gmail.com", telefono: "115550000" },
      items: productsAdded,
      valorTotal,
    };

    const collectionRef = collection(db, "orders");
    addDoc(collectionRef, order)
      .then(() => {
        productsAdded.map((product) => {
          const finalStock = product.stock - product.quantity;
          updateOrder(product.id, finalStock);
        });
      })
      .catch((error) => console.log({ error }));

    return valorTotal;
  }

  function updateOrder(productId, finalStock) {
    const itemRef = doc(db, "items", productId);
    updateDoc(itemRef, { stock: finalStock });
  }

  return (
    <>
      {productsAdded.length > 0 ? (
        <Container>
          {productsAdded.map((product) => (
            <div
              style={{ display: "flex", marginBlock: "1em" }}
              key={product.id}
            >
              <img
                src={product.imagen}
                alt="imagen del producto"
                style={{ height: "5em", width: "5em", marginInlineEnd: "1em" }}
              />
              <div>
                <div>
                  <h3>{product.nombre}</h3>
                </div>
                <p>
                  {product.quantity} x ${product.precio} = $
                  {product.quantity * product.precio}
                </p>
              </div>
              <Button
                variant="success"
                style={{ maxHeight: "2.5em", marginInlineStart: "1em" }}
                onClick={() => removeItem(product.id)}
              >
                Quitar
              </Button>
            </div>
          ))}
          <hr />
          <h2>Total = ${total.toFixed(2)}</h2>
          <div style={{ display: "inline-grid" }}>
            <Button variant="success" onClick={sendOrder}>
              Pagar
            </Button>

            <Button variant="success" onClick={clear} style={{ margin: "1em" }}>
              Vaciar carrito
            </Button>
          </div>
        </Container>
      ) : (
        <div>
          <h3>Sin productos en el carrito, ¡Agrega algo que te guste!</h3>
          <Link to="/">
            <Button variant="success" className="mt-3">
              Volver a la tienda
            </Button>
          </Link>
        </div>
      )}
    </>
  );
}

export default Cart;
