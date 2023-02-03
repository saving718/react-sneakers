import React from "react";
import Image from 'next/image'
import { useDispatch } from "react-redux";
import { addCard, delCard } from "widgets/cartItem";
import { cardItemType } from "widgets/cartItem";
import ItemButton from "features/itemButton/ui";
import "./cartItem.module.scss";

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
	const myLoader = ({ src, width, quality }) => {
		return `app/assets/image/sneakers/${src}?w=${width}&q=${quality || 75}`
	}

	return (
		<div className="b-card">
			<div className="card">
				<div className="card__wrap">
					<div className="card__top">
						<div className="card__image">
							<Image							
								src={require(`app/assets/image/sneakers/${item.image}`)}
								alt="Picture of the author"
							/>
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
		</div>
	);
};

export default Cartitem;