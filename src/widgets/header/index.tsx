import React from "react";
import styles from "./header.module.scss";
import HeaderCart from "features/headerCart/ui";
import Logo from "shared/ui/logo";

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
