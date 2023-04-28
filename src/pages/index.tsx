import React from "react";
import Head from "next/head";
import SneakersItems from "widgets/sneakersItems";
import axios from "axios";

const MainPage = ({ sneakers, lenSneakers }: any) => {
	return (
		<>
			<Head>
				<title>Main</title>
			</Head>
			<SneakersItems sneakersSEO={sneakers} lenSneakers={lenSneakers} />
		</>
	);
};

export const getServerSideProps = async (ctx: any) => {
	const getUrlItems = () => {
		let page = ctx.query._page;
		let limit = ctx.query._limit;
		const sort = ctx.query._sort;
		const color = ctx.query.color;
		const order = ctx.query._order;
		
		if (page == undefined) {
			page = 1;
			limit = 4;
		}

		return `_page=${page}&_limit=${limit}${sort != undefined ? "&_sort=" + sort : ""}${order != undefined ? "&_order=" + order : ""}${color != undefined ? "&color=" + color : ""}`;
	};
	const res = await axios.get(`http://localhost:3002/sneakers?${getUrlItems()}`);
	const data = await res.data;
	const lenSneakers = res.headers["x-total-count"];
	
	return {
		props: {
			sneakers: data,
			lenSneakers,
		},
	};
};

export default MainPage;
