import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cart from "app/assets/image/cart.png";
import "./headerCart.scss";

export default function HeaderCart() {
	const selectPrice: string = useSelector((state: any) => state.cart.fullPrice);

	return (
		<Link className="b-cart" to="/cart">
			<div className="cart__image">
				<img src={Cart} alt="Cart" />
			</div>
			<div className="cart__price"> {selectPrice}</div>
		</Link>
	);
}
