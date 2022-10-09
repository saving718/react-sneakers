import React from "react";
import Header from "shared/ui/header";
import "./layout.scss";
import { Outlet } from "react-router";

export function Layout() {
	return (
		<div className="l-page">
			<Header />
			<div className="l-main">
				<div className="main__wrap">
					<Outlet />
				</div>
			</div>
		</div>
	);
}
