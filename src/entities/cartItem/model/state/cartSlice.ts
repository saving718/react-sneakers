import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export interface cardItemType {
	id: number;
	brand: string;
	price: number;
	image: string;
	color: string;
}
interface cartSlice {
	fullPrice: number;
	prevPrice: number;
	cardsInCart: cardItemType[];
}
const initialState: cartSlice = {
	fullPrice: 0,
	prevPrice: 0,
	cardsInCart: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addCard: (state, action: PayloadAction<cardItemType>) => {
			state.cardsInCart.push(action.payload);
			state.prevPrice = state.fullPrice;
			state.fullPrice += action.payload.price;
		},
		delCard: (state, action: PayloadAction<cardItemType>) => {
			state.cardsInCart = state.cardsInCart.filter(
				(card) => card.id !== action.payload.id
			);
			state.prevPrice = state.fullPrice;
			state.fullPrice -= action.payload.price;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(HYDRATE, (state, action:any) => {	
			return {
				...state,
				...action.payload.subject,
			};
		});
	},
});

export const { addCard, delCard } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
