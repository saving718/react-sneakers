import axios from "axios";
import { cardItemType } from "widgets/cartItem/model/state/cartSlice";

export type GetCardsParams = {
    selectedPage: number,
    limitSneakers: number,
    sortValue: string,
    category: string
}; 

export type GetCardsType = {
    lenSneakers: string,
    cardsData: cardItemType[]
};

export const getCards = async (params: GetCardsParams): Promise<GetCardsType> => {
	const res = await axios({
		method: "get",
		url: `http://localhost:3002/sneakers?_page=${params.selectedPage}&_limit=
        ${params.limitSneakers}
        ${params.sortValue != "" ? `&${params.sortValue}` : ""}
        ${params.category != "" ? `&${params.category}` : ""}`,
	});

	const lenSneakers = res.headers["x-total-count"];
	const cardsData: cardItemType[] = res.data;
	const responseData = {lenSneakers, cardsData};
    
	return responseData;
};