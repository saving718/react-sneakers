import React from "react";
import styles from "./preloader.module.scss";

interface preloaderProps {
	height?: number;
}
const Preloader: React.FC<preloaderProps> = ({ height }) => {
	return (
		<div className="loader-container">
			<div className={styles["loader"]}></div>

			<style jsx>{`
				.loader-container {
					height: ${height ? height : 100}px;
					display: flex;
					align-items: center;
					justify-content: center;
				}
			`}</style>
		</div>
	);
};
export default Preloader;
