import React from "react";
import busket from "app/assets/image/busket-empty.svg";
import "./emptyBusket.module.scss";

const EmptyBusket = () => {
	return (
		<div className="b-empty-busket">
			<div className="empty-busket__wrap">
				<img className="empty-busket__image" src={busket} alt="busket" />
				<p className="empty-busket__text">Busket is empty</p>
			</div>
		</div>
	);
};
export default EmptyBusket;