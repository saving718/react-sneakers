import React from "react";
import styles from "./preloader.module.scss";

const Preloader = ({height}) => {
	return (
		<div className="loader-container">
			<div className={styles["loader"]}></div>

			<style jsx>{`
				.loader-container {
                    height: ${height}px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
			`}</style>
		</div>
	);
};
export default Preloader;
