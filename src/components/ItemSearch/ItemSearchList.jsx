import React, { useEffect } from 'react';
import ItemSearchRow from "@/components/ItemSearch/ItemSearchRow.jsx";
import './ItemSearchList.scss';
import { useItemSearch } from "@/context/ItemSearchContext.jsx";

const ItemSearchList = ({ data, columns, rowFormat }) => {
    const {
        searchTerm,
        selectedFilters,
        currentPage,
        itemsPerPage,
        setTotalPages,
        setCurrentPage,
    } = useItemSearch();

    const filteredData = data.filter((item) => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilters = Object.entries(selectedFilters).every(([group, selectedOptions]) => {
            if (selectedOptions.length === 0) return true;
            const itemValue = item[group];
            const itemValues = Array.isArray(itemValue) ? itemValue : [itemValue];
            return selectedOptions.some(option => itemValues.includes(option));
        });
        return matchesSearch && matchesFilters;
    });

    // Update totalPages and ensure currentPage is in range when filtered data changes
    useEffect(() => {
        const newTotalPages = Math.ceil(filteredData.length / itemsPerPage) || 1;
        setTotalPages(newTotalPages);
        if (currentPage > newTotalPages) {
            setCurrentPage(newTotalPages);
        }
    }, [filteredData.length, itemsPerPage, currentPage, setTotalPages, setCurrentPage]);

    // Slice the data for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

    return (
        <>
            <ul className="item-search-list">
                <li
                    className="item-search-list__header"
                    style={{ gridTemplateColumns: `2.5fr repeat(${columns.length}, 1fr)` }}
                >
                    <p>Name</p>
                    {columns.map((column) => (
                        <p key={column}>{column}</p>
                    ))}
                </li>
                {paginatedData.map((item, index) => (
                    <ItemSearchRow key={index} itemData={item} columnCount={columns.length}>
                        {rowFormat(item)}
                    </ItemSearchRow>
                ))}
            </ul>
        </>
    );
};

export default ItemSearchList;
