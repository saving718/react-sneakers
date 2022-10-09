import { Routes, Route } from "react-router";
import { MainPage }  from "./mainPage";
import { CartPage } from "./cartPage";
import { Layout } from "shared/ui/layout";

export const Routing = () => {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<MainPage/>}></Route>
				<Route path="/cart" element={<CartPage/>}></Route>
			</Route>
		</Routes>
	);
};