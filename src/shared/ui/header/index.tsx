import React from "react";
import "./header.scss";
import HeaderCart from "features/headerCart/ui";
import Logo from "shared/ui/logo";

const Header = () => {
	return (
		<div className="l-header">
			<div className="header__wrap">
				<Logo />
				<HeaderCart />
			</div>
		</div>
	);
};
export default Header;