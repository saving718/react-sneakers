import React from "react";
import logo from "app/assets/image/logo.png";
import "./logo.module.scss";
import Link from "next/link";

const Logo = () => {
	return (
		<div className="b-logo">
			<Link className="logo__link" href="/"><a>				<img className="logo__image" src={logo} alt="logo" />
				sneakers shop</a></Link>
		</div>
	);
};
export default Logo;