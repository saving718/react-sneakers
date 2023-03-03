import React from "react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
const Card = dynamic(() => import("entities/cartItem"));

import EmptyBusket from "shared/ui/emptyBusket";
import { cardItemType } from "entities/cartItem";
import { RootState } from "entities/cartItem";
import styles from "./cartItems.module.scss";

const CartItems = () => {
	const cardsSelect: cardItemType[] = useSelector(
		(state: RootState) => state.cart.cardsInCart
	);

	return (
		<div className={styles["cart-items"]}>
			{cardsSelect.length ? (
				<div className={styles["cart-items__wrap"]}>
					{cardsSelect.map((item) => (
						<Card key={item.id} item={item} {...cardsSelect} />
					))}
				</div>
			) : (
				<EmptyBusket />
			)}
		</div>
	);
};
export default CartItems;