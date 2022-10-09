import React from "react";
import axios from "axios";
import "./sneakersItems.scss";
import Cartitem from "widgets/cartItem/ui/cartitem";
import Sorting from "shared/sorting/ui/sorting";
import SelectCategory from "shared/selectCategory/ui/selectCategory";
import Pagination from "shared/pagination/ui/pagination";
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
		axios({
			method: "get",
			url: `http://localhost:3002/sneakers?_page=${selectedPage}&_limit=
			${limitSneakers}
			${sortValue != "" ? `&${sortValue}` : ""}
			${category != "" ? `&${category}` : ""}`,
		}).then((response) => {			
			const lenSneakers = response.headers["x-total-count"];
			setSneakers(response.data);			
			setSneakersLength(lenSneakers);
		});
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
