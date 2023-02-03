import Header from "shared/ui/header";
import "./layout.scss";


export const Layout = ({children}: any) => {
	return (
		<div className="l-page">
			<Header />
			<div className="l-main">
				<div className="main__wrap">
					{children}
				</div>
			</div>
		</div>
	);
};
