import CartItems from "widgets/cartItems/ui";
import Head from "next/head";

const CartPage = () => {
	return (
		<div>
			<Head>
				<title>Cart</title>
			</Head>
			<CartItems />
		</div>
	);
};
export default CartPage;
