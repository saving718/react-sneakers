import React from "react";
import dynamic from "next/dynamic";
import styles from "./sneakersItems.module.scss";
const Card = dynamic(() => import("entities/cartItem"));
import { cardItemType } from "entities/cartItem";
import { useRouter, Router } from "next/router";
import NProgress from "nprogress";
import { Pagination, Preloader, SelectCategory, Sorting } from "shared/ui";

interface sneakersItemsProps {
	sneakersSEO: cardItemType[], 
	lenSneakers: number
}
const SneakersItems: React.FC<sneakersItemsProps> = ({ sneakersSEO, lenSneakers }) => {
	const router = useRouter();
	const [loading, setLoading] = React.useState(false);
	const [sortValue, setSortValue] = React.useState("");
	const [category, setCategory] = React.useState("");
	const [selectedPage, setSelectedPage] = React.useState(1);
	const limitSneakers = 4;
	const pageCount: number = lenSneakers / limitSneakers;

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
		const url = `?_page=${selectedPage}&_limit=${limitSneakers}${
			sortValue != "" ? `&${sortValue}` : ""
		}${category != "" ? `&${category}` : ""}`;
		router.push(url);
	}, [selectedPage, category, sortValue]);

	Router.events.on("routeChangeStart", () => {
		NProgress.start();
		setLoading(false);
	});
	Router.events.on("routeChangeComplete", () => {
		NProgress.done();
		setLoading(true);
	});
	Router.events.on("routeChangeError", () => NProgress.done());

	return (
		<div className={styles["sneakers-items"]}>
			<SelectCategory selectCategory={selectCategory} />
			<Sorting sortSneakers={sortSneakers} />
			{loading ? (
				<div className={styles["sneakers-items__wrap"]}>
					{sneakersSEO.map((item: cardItemType) => (
						<Card key={item.id} item={item} />
					))}
				</div>
			) : (
				<Preloader height={335} />
			)}
			<Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
		</div>
	);
};
export default SneakersItems;
