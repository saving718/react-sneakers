import React from "react";
import logo from "app/assets/image/logo.png";
import styles from "./logo.module.scss";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
	return (
		<div className={styles["logo"]}>
			<Link href="/">
				<a className={styles["logo__link"]}>
					<Image className={styles["logo__image"]} src={logo} alt="logo"/>
					<span className={styles["logo__name"]}>sneakers shop</span>
				</a>
			</Link>
		</div>
	);
};
export default Logo;
