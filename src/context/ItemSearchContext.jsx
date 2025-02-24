import { createContext, useContext, useState } from 'react';

const ItemSearchContext = createContext(null);

export function ItemSearchProvider({ children }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFilters, setSelectedFilters] = useState({});

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 24;
    const [totalPages, setTotalPages] = useState(1);

    function handleCheckBoxChange(groupName, option, isChecked) {
        setSelectedFilters((prev) => {
            const updatedGroup = isChecked
                ? [...(prev[groupName] || []), option]
                : (prev[groupName] || []).filter((item) => item !== option);
            return { ...prev, [groupName]: updatedGroup };
        });
    }

    return (
        <ItemSearchContext.Provider
            value={{
                searchTerm,
                setSearchTerm,
                selectedFilters,
                setSelectedFilters,
                handleCheckBoxChange,
                currentPage,
                setCurrentPage,
                itemsPerPage,
                totalPages,
                setTotalPages,
            }}
        >
            {children}
        </ItemSearchContext.Provider>
    );
}

export function useItemSearch() {
    const context = useContext(ItemSearchContext);
    if (!context) {
        throw new Error('useItemSearch must be used within an ItemSearchProvider');
    }
    return context;
}
