import { RiShoppingBasketFill } from "react-icons/ri";
import "./CartWidget.css";
import { useContext } from "react";
import { Context } from "../../context";
import { Link } from "react-router-dom";

function CartWidget() {
  const { getQuantity } = useContext(Context);

  return (
    <div className="CartCont nav-link p-2" href="#">
      <i className="CartIcon">
        <Link to="/cart">
          <RiShoppingBasketFill className="iconoCarro" />
        </Link>
      </i>
      <i className="CartCant">{getQuantity()}</i>
    </div>
  );
}

export default CartWidget;
