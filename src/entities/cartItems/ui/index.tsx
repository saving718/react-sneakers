import React from "react";
import { useSelector } from "react-redux";
import Cartitem from "widgets/cartItem/ui/cartitem";
import { cardItemType } from "widgets/cartItem";
import { RootState } from "widgets/cartItem";
import "./cartItems.scss";

export default function CartItems() {
	const cardsSelect: cardItemType[] = useSelector((state: RootState) => state.cart.cardsInCart);

	return (
		<div className="b-cart-items">
			<div className="cart-items__wrap">
				{cardsSelect.map((item) => (
					<Cartitem key={item.id} item={item} {...cardsSelect} />
				))}
			</div>
		</div>
	);
}
