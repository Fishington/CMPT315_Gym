
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPage} from "@/redux/actions/itemSearchActions";

export default function usePagination() {
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.itemSearch.currentPage);
    const totalPages = useSelector((state) => state.itemSearch.totalPages);
    const setPage = (page) => dispatch(setCurrentPage(page));

    const maxVisiblePageButtons = 4;

    // Determine the number buttons
    const getPageNumbers = () => {
        const pages = [];

        // If total pages are small, show all
        if (totalPages <= maxVisiblePageButtons + 2) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            pages.push(1); // Always show first page

            let left = Math.max(2, currentPage - Math.floor(maxVisiblePageButtons / 2));
            let right = Math.min(totalPages - 1, currentPage + Math.floor(maxVisiblePageButtons / 2));

            // Shift if near the start or end
            // Left
            if (currentPage <= Math.floor(maxVisiblePageButtons / 2) + 1) {
                left = 2;
                right = 1 + maxVisiblePageButtons;
            }

            // Right
            if (currentPage >= totalPages - Math.floor(maxVisiblePageButtons / 2)) {
                left = totalPages - maxVisiblePageButtons;
                right = totalPages - 1;
            }

            // Ellipses or numbers buttons
            if (left > 2) {
                pages.push('...');
            }
            for (let i = left; i <= right; i++) {
                pages.push(i);
            }
            if (right < totalPages - 1) {
                pages.push('...');
            }

            pages.push(totalPages); // Always show last page
        }

        return pages;
    };

    const pageNumbers = getPageNumbers();

    return {
        currentPage,
        totalPages,
        pageNumbers,
        setPage
    };
}