import React from "react";
import "./selectCategory.scss";

type selectCategoryProps = {
	selectCategory: (vakue: string) => void;
}

const SelectCategory:React.FC<selectCategoryProps> = ({ selectCategory }) => {
	type CategoryItem = {
		id: React.Key;
		name: string;
		value: string;
	};
	
	const category: CategoryItem[] = [
		{ id: 0, name: "All", value: "" },
		{ id: 1, name: "Red", value: "color=red" },
		{ id: 2, name: "Black", value: "color=black" },
		{ id: 3, name: "White", value: "color=white" },
	];

	return (
		<div className="b-category">
			<div className="category__wrap">
				<div className="category__list">
					{category.map((item, i) => (
						<div className="category__item" key={item.id}>
							<input
								className="category__button"
								type="radio"
								name="category"
								defaultChecked={i === 0}
								onClick={() => selectCategory(item.value)}
							></input>
							<div className="category__name">{item.name}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SelectCategory;