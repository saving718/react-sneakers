import React from "react";
import Select from "react-select";
import "./sorting.scss";

type sortSneakersProps = {
	sortSneakers: (value: string) => void;
}
const Sorting:React.FC<sortSneakersProps> = ({ sortSneakers }) => {
	type sortingItemsType = {
		label: string,
		value: string
	}
	const sortingItems: sortingItemsType[] = [
		{
			label: "Highest price",
			value: "_sort=price&_order=desc",
		},
		{
			label: "Lowest price",
			value: "_sort=price&_order=asc",
		},
		{
			label: "Name brand A-Z",
			value: "_sort=brand&_order=asc",
		},
		{
			label: "Name brand Z-A",
			value: "_sort=brand&_order=desc",
		},
	];
	const onChangeSelect = (option: sortingItemsType | null) => {
		if (option) {
			sortSneakers(option.value);
		}
	};
	
	return (
		<div className="b-sorting">
			<Select
				options={sortingItems}
				onChange={onChangeSelect}
				defaultValue={sortingItems[0]}
				isSearchable={false}
			></Select>
		</div>
	);
};
export default Sorting;