import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../context";
import { Button, Container, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import {
  collection,
  getFirestore,
  addDoc,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

function Cart() {
  const { productsAdded, clear, removeItem } = useContext(Context);
  const db = getFirestore();
  const navigate = useNavigate();

  const [buyerInfo, setBuyerInfo] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const total = productsAdded.reduce(
    (accumulator, { precio, quantity }) => accumulator + precio * quantity,
    0
  );

  function sendOrder() {
    const order = {
      buyer: buyerInfo,
      time: serverTimestamp(),
      items: productsAdded,
      total,
    };

    const collectionRef = collection(db, "orders");
    addDoc(collectionRef, order)
      .then(({ id }) => {
        productsAdded.forEach(({ id: productId, stock, quantity }) => {
          const finalStock = stock - quantity;
          const itemRef = doc(db, "items", productId);
          updateDoc(itemRef, { stock: finalStock });
        });

        Swal.fire({
          icon: "success",
          title: "El ID de tu compra es",
          text: id,
          showConfirmButton: false,
          timer: 5000,
        }).then(() => {
          navigate("/");
        });
        clear();
      })
      .catch((error) => console.log({ error }));
  }

  function handleInput(e) {
    const { value, name } = e.target;
    setBuyerInfo((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (buyerInfo.email !== buyerInfo.emailConfirm) {
      alert("Los correos electrónicos ingresados no coinciden");
      return;
    }

    setFormSubmitted(true);
    setShowForm(false);
  }

  return (
    <>
      {productsAdded.length > 0 ? (
        <Container style={{ fontFamily: "Comfortaa, cursive" }}>
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
                  <h3 style={{ fontWeight: "bold" }}>{product.nombre}</h3>
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
          <h2 style={{ fontWeight: "bold" }}>Total = ${total.toFixed(2)}</h2>
          {showForm ? (
            <Form
              onSubmit={handleSubmit}
              style={{ margin: "2em 0", fontWeight: "bold" }}
            >
              <Form.Group controlId="formBasicNombre">
                <Form.Label>Nombre y apellido</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu nombre completo"
                  required
                  name="nombre"
                  value={buyerInfo.nombre}
                  onChange={handleInput}
                />
              </Form.Group>

              <Form.Group
                controlId="formBasicEmail"
                style={{ marginBlockStart: "0.5em" }}
              >
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingresa tu correo electrónico"
                  required
                  name="email"
                  value={buyerInfo.email}
                  onChange={handleInput}
                />
              </Form.Group>

              <Form.Group
                controlId="formBasicEmailConfirm"
                style={{ marginBlockStart: "0.5em" }}
              >
                <Form.Label>Confirma tu correo electrónico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Vuelve a ingresar tu correo electrónico"
                  required
                  name="emailConfirm"
                  value={buyerInfo.emailConfirm}
                  onChange={handleInput}
                />
              </Form.Group>

              <Form.Group
                controlId="formBasicTelefono"
                style={{ marginBlockStart: "0.5em" }}
              >
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu número de teléfono"
                  required
                  name="telefono"
                  value={buyerInfo.telefono}
                  onChange={handleInput}
                />
              </Form.Group>

              <Button
                type="submit"
                variant="success"
                style={{ marginTop: "1em" }}
              >
                Guardar
              </Button>
            </Form>
          ) : (
            <Button
              variant="success"
              onClick={() => setShowForm(true)}
              style={{ margin: "1em" }}
            >
              Ingresa datos de comprador
            </Button>
          )}
          <div style={{ display: "inline-grid" }}>
            {formSubmitted ? (
              <Button variant="success" onClick={sendOrder}>
                Pagar
              </Button>
            ) : null}
            <Button variant="success" onClick={clear} style={{ margin: "1em" }}>
              Vaciar carrito
            </Button>
          </div>
        </Container>
      ) : (
        <div style={{ fontFamily: "Comfortaa, cursive", margin: "3em 1em" }}>
          <h3 style={{ fontWeight: "bold" }}>
            Sin productos en el carrito, ¡Agrega algo que te guste!
          </h3>
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
