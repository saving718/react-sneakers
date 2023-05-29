import React from "react";
import logo from "app/assets/image/logo.png";
import LogoText from "app/assets/image/logo.js";
import styles from "./logo.module.scss";
import Link from "next/link";
import Image from "next/image";
import anime from "animejs";

const Logo = () => {
	
	const animationRef = React.useRef(null);
	React.useEffect(() => {
		animationRef.current = anime({
			targets: `.${styles["logo__link"]} path`,
			strokeDashoffset: [anime.setDashoffset, 0],
			easing: "linear",
			duration: 100,
			delay: function (el, i) {
				return i * 150;
			},
			direction: "alternate",
			loop: false,
		});
	}, []);

	return (
		<div className={styles["logo"]}>
			<Link href="/">
				<a className={styles["logo__link"]}>
					<Image className={styles["logo__image"]} src={logo} alt="logo" />
					<span className={styles["logo__name"]}>
						<LogoText />
					</span>
				</a>
			</Link>
		</div>
	);
};
export default Logo;
