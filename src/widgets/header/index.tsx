import React from "react";
import styles from "./header.module.scss";
import HeaderCart from "features/headerCart";
import { Logo } from "shared/ui";

export default function Header() {
	return (
		<div className={styles["header"]}>
			<div className={styles["header__wrap"]}>
				<Logo />
				<HeaderCart />
			</div>
		</div>
	);
}
