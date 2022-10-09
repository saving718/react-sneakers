import React from "react";
import { getCards } from "shared/api/cards";
import "./sneakersItems.scss";
import Cartitem from "widgets/cartItem";
import Sorting from "shared/ui/sorting";
import SelectCategory from "shared/ui/selectCategory";
import Pagination from "shared/ui/pagination";
import { cardItemType } from "widgets/cartItem/model/state/cartSlice";

export default function SneakersItems() {
	const [sneakers, setSneakers] = React.useState<cardItemType[]>([]);
	const [sneakerslength, setSneakersLength] = React.useState("0");
	const [sortValue, setSortValue] = React.useState("");
	const [category, setCategory] = React.useState("");
	const [selectedPage, setSelectedPage] = React.useState(1);
	const limitSneakers = 4;
	const pageCount: number = parseInt(sneakerslength) / limitSneakers;

	const sortSneakers = (value: string) => {
		setSortValue(value);
	};
	const selectCategory = (value: string) => {
		setCategory(value);
		setSelectedPage(1);
	};
	const handlePageClick = (e: { selected: number }) => {
		setSelectedPage(e.selected + 1);
	};

	React.useEffect(() => {
		(async () => {
			const responseData = await getCards({selectedPage, category, sortValue, limitSneakers});
			setSneakersLength(responseData.lenSneakers);
			setSneakers(responseData.cardsData);
		})();
		
	}, [selectedPage, category, sortValue]);

	return (
		<div className="b-sneakers-items">
			<SelectCategory selectCategory={selectCategory} />
			<Sorting sortSneakers={sortSneakers} />
			<div className="sneakers-items__wrap">
				{sneakers.map((item) => (
					<Cartitem key={item.id} item={item} />
				))}
			</div>
			<Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
		</div>
	);
}
