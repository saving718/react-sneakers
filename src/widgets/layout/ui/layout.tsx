import React, { ReactElement } from "react";
import Header from "shared/ui/header";
import "./layout.scss";

export function Layout({children}: any) {
	return (
		<div className="l-page">
			<Header />
			<div className="l-main">
				<div className="main__wrap">
					<main>{ children }</main>
				</div>
			</div>
		</div>
	);
}
