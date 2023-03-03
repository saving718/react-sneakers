import Header from "widgets/header";
import styles from "./layout.module.scss";

export const Layout = ({ children }: any) => {
	return (
		<div className={styles["page"]}>
			<Header />
			<div className={styles["main"]}>
				<div className={styles["main__wrap"]}>{children}</div>
			</div>
		</div>
	);
};
