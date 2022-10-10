import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "widgets/cartItem";

type itemButtonProps = {
	id: number;
	addCardInCart: () => void;
	delCardInCart: () => void;
}

const ItemButton:React.FC<itemButtonProps> = ({ id, addCardInCart, delCardInCart }) => {

	type findElItem = {
		id: number;
	}
	const sneakers = useSelector((state: RootState) => state.cart.cardsInCart);
	const findEl = sneakers.find((item: findElItem) => item.id === id);

	return (
		<div className="card__button">
			{!findEl ? (
				<div className="card__buy" onClick={() => addCardInCart()}>
					Buy product
				</div>
			) : (
				<div className="card__del" onClick={() => delCardInCart()}>
					Delete product
				</div>
			)}
		</div>
	);
};

export default ItemButton;