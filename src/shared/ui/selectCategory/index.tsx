import React from "react";
import styles from "./selectCategory.module.scss";

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
		<div className={styles["category"]}>
			<div className={styles["category__wrap"]}>
				<div className={styles["category__list"]}>
					{category.map((item, i) => (
						<div className={styles["category__item"]} key={item.id}>
							<input
								className={styles["category__button"]}
								type="radio"
								name="category"
								defaultChecked={i === 0}
								onClick={() => selectCategory(item.value)}
							></input>
							<div className={styles["category__name"]}>{item.name}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SelectCategory;