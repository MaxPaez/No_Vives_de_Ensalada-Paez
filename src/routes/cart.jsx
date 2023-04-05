import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context";
import { Button } from "react-bootstrap";

function Cart() {
  const { productsAdded, clear } = useContext(Context);

  const total = productsAdded.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.precio * currentValue.quantity,
    0
  );
  return (
    <>
      {productsAdded.length > 0 ? (
        <ul>
          {productsAdded.map((product) => (
            <li key={product.id}>
              <div>
                <h3>{product.nombre}</h3>
                {/* <button onClick={() => handleRemove(product.id)}>Quitar</button> */}
              </div>
              <p>
                {product.quantity} x ${product.precio} = $
                {product.quantity * product.precio}
              </p>
            </li>
          ))}
          <hr />
          <h4>Total = ${total.toFixed(2)}</h4>
          <button onClick={clear}>Vaciar carrito</button>
        </ul>
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
