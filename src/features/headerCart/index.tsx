import React from "react";
import { useSelector } from "react-redux";
import styles from "./headerCart.module.scss";
import Link from "next/link";
import Image from "next/image";
import anime from "animejs";
import cart from "app/assets/image/cart.png";

const HeaderCart = () => {
	const selectPrice: string = useSelector((state: any) => state.cart.fullPrice);
	const animation = React.useRef(null);
	const selectPriceRef = React.useRef(null);
	
	const [price1, setPrice1] = React.useState(1);
	React.useEffect(() => {
		animation.current = anime.timeline({
			direction: "alternate",
			loop: false,
			autoplay: true,
			easing: "easeInOutSine"
		  });
		  
		animation.current.add({
			targets: selectPrice,
			price: selectPrice,
			round: 1,
			easing: "linear",
			update: function() {
				setPrice1(selectPrice);
			}
		});
		
		console.log(animation);
		
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
						<span ref={selectPriceRef} className={styles["cart__price"]}>
							{JSON.stringify(price1)}
						</span>
					</a>
				</Link>
			</div>
		</div>
	);
};
export default HeaderCart;
