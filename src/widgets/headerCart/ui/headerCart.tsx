import React from "react";
import { useSelector } from "react-redux";
import Cart from "app/assets/image/cart.png";
import "./headerCart.module.scss";
import Link from "next/link";

export default function HeaderCart() {
  const selectPrice: string = useSelector((state: any) => state.cart.fullPrice);

  return (
    <Link className="b-cart" href="/cart">
      <a>
        <div className="cart__image">
          <img src={Cart} alt="Cart" />
        </div>
        <div className="cart__price"> {selectPrice}</div>
      </a>
    </Link>
  );
}
