import { RiShoppingBasketFill } from "react-icons/ri";
import Image from "react-bootstrap/Image";
import "./CartWidget.css";

function CartWidget() {
  return (
    <a className="CartCont nav-link p-2" href="#">
      <i className="CartIcon">
        <RiShoppingBasketFill className="iconoCarro" />
        {/* <Image
          src="/assets/imagenes/cesta.png"
          alt="icono carrito"
          // className="iconoCarro"
        /> */}
      </i>
      <i className="CartCant">4</i>
    </a>
  );
}

export default CartWidget;
