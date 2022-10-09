import React from "react";
import ReactPaginate from "react-paginate";
import "./pagination.scss";

type paginationProps = {
	handlePageClick: (e: { selected: number }) => void;
	pageCount: number;
}

const Pagination:React.FC<paginationProps> = ({ handlePageClick, pageCount }) => {
	return (
		<div className="b-pagination">
			<ReactPaginate
				breakLabel="..."
				nextLabel=">"
				onPageChange={handlePageClick}
				pageCount={pageCount}
				previousLabel="<"
			/>
		</div>
	);
};
export default Pagination;