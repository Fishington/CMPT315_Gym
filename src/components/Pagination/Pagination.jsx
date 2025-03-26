import usePagination from './usePagination';
import Button from '@/components/Button/index.js';

import './Pagination.scss';

export default function Pagination() {
    const {currentPage, totalPages, pageNumbers, setPage} = usePagination();

    return (
        <div className="pagination">
            <Button
                color="white"
                size="pagination"
                onClick={() => setPage(currentPage - 1)}
                disabled={currentPage === 1}
            >
                {'<'}
            </Button>

            {pageNumbers.map((page, index) =>
                typeof page === 'number' ? (
                    <Button
                        key={index}
                        color={page === currentPage ? "active" : "white"}
                        size="pagination"
                        onClick={() => setPage(page)}
                    >
                        {page}
                    </Button>
                ) : (
                    <span key={index} className="pagination__ellipsis">
                        {page}
                    </span>
                ))}

            <Button
                color="white"
                size="pagination"
                onClick={() => setPage(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                {'>'}
            </Button>
        </div>
    );
}