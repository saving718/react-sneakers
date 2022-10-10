import React from "react";
import { Link } from "react-router-dom";
import logo from "app/assets/image/logo.png";
import "./logo.scss";

const Logo = () => {
	return (
		<div className="b-logo">
			<Link className="logo__link" to="/">
				<img className="logo__image" src={logo} alt="logo" />
				sneakers shop
			</Link>
		</div>
	);
};
export default Logo;