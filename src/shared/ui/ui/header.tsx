import React from "react";
import "./header.module.scss";
import HeaderCart from "widgets/headerCart/ui/headerCart";
import Logo from "shared/ui/logo"

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
