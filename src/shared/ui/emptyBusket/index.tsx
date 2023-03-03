import React from "react";
import busket from "app/assets/image/busket-empty.svg";
import styles from "./emptyBusket.module.scss";
import Image from "next/image";
const EmptyBusket = () => {
	return (
		<div className={styles["empty-busket"]}>
			<div className={styles["empty-busket__wrap"]}>
				<div className={styles["empty-busket__image"]}>
					<Image src={busket} alt="busket" objectFit="contain" layout="fill" />
				</div>
				<p className={styles["empty-busket__text"]}>Busket is empty</p>
			</div>
		</div>
	);
};
export default EmptyBusket;
