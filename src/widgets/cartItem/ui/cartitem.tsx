import React from "react";
import { useDispatch } from "react-redux";
import { addCard, delCard } from "widgets/cartItem";
import { cardItemType } from "widgets/cartItem";
import ItemButton from "features/itemButton/ui";
import "./cartItem.scss";

interface cartItemProps  {
	item: cardItemType
}

const Cartitem: React.FC<cartItemProps> = ({ item }) => {

	const dispatch = useDispatch();
	const addCardInCart = () => {		
		dispatch(addCard(item));
	};
	const delCardInCart = () => {
		dispatch(delCard(item));
	};
	
	return (
		<div className="b-card">
			<div className="card__wrap">
				<div className="card__top">
					<div className="card__image">
						<img src={require(`app/assets/image/${item.image}`)} alt="sneaker" />
					</div>
				</div>
				<div className="card__bottom">
					<p className="card__name">{item.brand}</p>
					<div className="card__price">{item.price} $</div>
					<ItemButton
						addCardInCart={addCardInCart}
						delCardInCart={delCardInCart}
						id={item.id}
					/>
				</div>
			</div>
		</div>
	);
};

export default Cartitem;