import React from "react";
import "./header.scss";
import HeaderCart from "widgets/headerCart/ui/headerCart";
import Logo from "shared/logo/ui/logo";

export default function Header() {
	return (
		<div className="l-header">
			<div className="header__wrap">
				<Logo />
				<HeaderCart />
			</div>
		</div>
	);
}
