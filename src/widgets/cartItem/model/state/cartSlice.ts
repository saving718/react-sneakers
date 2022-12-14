import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface cardItemType  {
	id: number;
	brand: string;
	price: number;
	image: string;
	color: string;
}
interface cartSlice {
	fullPrice: number;
	cardsInCart: cardItemType[]
}
const initialState: cartSlice = {
	fullPrice: 0,
	cardsInCart: []
}; 

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addCard: (state, action: PayloadAction<cardItemType>) => {
			state.cardsInCart.push(action.payload);
			state.fullPrice += action.payload.price;	
		},
		delCard: (state, action: PayloadAction<cardItemType>) => {
			state.cardsInCart = state.cardsInCart.filter(
				(card) => card.id !== action.payload.id
			);
			state.fullPrice -= action.payload.price;
		},
	},
});

export const { addCard, delCard } = cartSlice.actions;

export default cartSlice.reducer;
