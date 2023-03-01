import { RiShoppingBasketFill } from "react-icons/ri";
import "./CartWidget.css";

function CartWidget() {
  return (
    <a className="CartCont nav-link p-2" href="#">
      <i className="CartIcon">
        <RiShoppingBasketFill className="iconoCarro" />
      </i>
      <i className="CartCant">4</i>
    </a>
  );
}

export default CartWidget;
