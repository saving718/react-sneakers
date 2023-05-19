import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addCard, delCard } from "entities/cartItem";
import { cardItemType } from "entities/cartItem";
import ItemButton from "entities/cartItem/ui/itemButton";
import styles from "./cartItem.module.scss";
import anime from "animejs";

interface cardProps  {
	item: cardItemType
}

const Card: React.FC<cardProps> = ({ item }) => {
	
	const dispatch = useDispatch();
	const addCardInCart = () => {		
		dispatch(addCard(item));
	};
	const delCardInCart = () => {
		dispatch(delCard(item));
	};

	const animationRef = React.useRef(null);
	
	React.useEffect(() => {
		animationRef.current = anime({
			targets: `.${styles["card"]}`,
			loop: false,
			direction: "alternate",
			easing: "linear",
			translateY: [-500, 0],
			duration: 400
		});
	}, [item]);

	return (
		<div className={styles["card"]}>
			<div className={styles["card__container"]}>
				<div className={styles["card__wrap"]}>
					<div className={styles["card__top"]}>
						<div className={styles["card__image-container"]}>
							<Image						
								src={require(`app/assets/image/sneakers/${item.image}`)}
								alt={item.brand}
								objectFit='contain'
								layout='fill'
							/>
						</div>
					</div>
					<div className={styles["card__bottom"]}>
						<p className={styles["card__name"]}>{item.brand}</p>
						<div className={styles["card__price"]}>{item.price} $</div>
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

export default Card;