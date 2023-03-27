import { RiShoppingBasketFill } from "react-icons/ri";
import Image from "react-bootstrap/Image";
import "./CartWidget.css";
import { useContext } from "react";
import { Context } from "../../context";

function CartWidget() {
  const { itemsAddedQuantity } = useContext(Context);

  return (
    <a className="CartCont nav-link p-2" href="#">
      <i className="CartIcon">
        <RiShoppingBasketFill className="iconoCarro" />
      </i>
      <i className="CartCant">{itemsAddedQuantity.length}</i>
    </a>
  );
}

export default CartWidget;
