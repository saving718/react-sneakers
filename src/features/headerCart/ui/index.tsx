import React from "react";
import { useSelector } from "react-redux";
import styles from "./headerCart.module.scss";
import Link from "next/link";
import Image from "next/image";
import cart from "app/assets/image/cart.png";

const HeaderCart = () => {
	const selectPrice: string = useSelector((state: any) => state.cart.fullPrice);
	
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
