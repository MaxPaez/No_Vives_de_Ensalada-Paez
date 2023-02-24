import React from "react";
import { RiShoppingBasketFill } from "react-icons/ri";
import "./CartWidget.css";

function CartWidget() {
  return (
    <a class="nav-link p-2" href="#">
      <i class="CartIcon" aria-hidden="true">
        <RiShoppingBasketFill className="iconoCarro" />
      </i>
      <i class="CartCant" aria-hidden="true">
        4
      </i>
    </a>
  );
}

export default CartWidget;
