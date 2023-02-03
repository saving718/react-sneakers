import React from "react";
import { useSelector } from "react-redux";
import Cart from "app/assets/image/cart.png";
import "./headerCart.module.scss";
import Link from "next/link";

const HeaderCart = () => {
	const selectPrice: string = useSelector((state: any) => state.cart.fullPrice);

	return (
		<Link className="b-cart" href="/cart">
			<div className="cart__image">
				<a><img src={Cart} alt="Cart" /></a>
			</div>
			<div className="cart__price"> {selectPrice}</div>
		</Link>
	);
};
export default HeaderCart;
