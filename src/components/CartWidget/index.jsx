import { RiShoppingBasketFill } from "react-icons/ri";
import "./CartWidget.css";
import { useContext } from "react";
import { Context } from "../../context";

function CartWidget() {
  const { productsAdded } = useContext(Context);

  return (
    <a className="CartCont nav-link p-2" href="#">
      <i className="CartIcon">
        <RiShoppingBasketFill className="iconoCarro" />
      </i>
      <i className="CartCant">{productsAdded ? productsAdded.length : 0}</i>
    </a>
  );
}

export default CartWidget;
