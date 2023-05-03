import React from "react";
import { useSelector } from "react-redux";
import styles from "./headerCart.module.scss";
import Link from "next/link";
import Image from "next/image";
import anime from "animejs";
import cart from "app/assets/image/cart.png";

const HeaderCart = () => {

	const selectPrice: string = useSelector((state: any) => state.cart.fullPrice);
	const prevPrice: string = useSelector((state: any) => state.cart.prevPrice);

	const animationRef = React.useRef(null);
	
	React.useEffect(() => {
		animationRef.current = anime({
			targets: `.${styles["cart__price"]}`,
			loop: false,
			direction: "alternate",
			easing: "linear",
			innerHTML: [prevPrice, selectPrice],
			round: 1,
			duration: 500
		});
	}, [selectPrice]);

	return (
		<div className={styles["cart"]}>
			<div>
				<Link href="/cart">
					<a className={styles["cart__link"]}>
						<span className={styles["cart__image"]}>
							<Image
								src={cart}
								alt="Cart1"
								layout="fill"
								width="28px"
								height="28px"
							/>
						</span>
						<span className={styles["cart__price"]}>{selectPrice}</span>
					</a>
				</Link>
			</div>
		</div>
	);
};
export default HeaderCart;
