import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setCurrentPage, setTotalPages} from '@/redux/actions/itemSearchActions';
import ItemSearchRow from "@/components/ItemSearch/ItemSearchRow.jsx";
import './ItemSearchList.scss';


const ItemSearchList = ({data, columns, rowFormat, onDataClick}) => {
    const dispatch = useDispatch();
    const { itemsPerPage, searchTerm, selectedFilters, currentPage } = useSelector((state) => state.itemSearch);

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

    useEffect(() => {
        const newTotalPages = Math.ceil(filteredData.length / itemsPerPage) || 1;

        dispatch(setTotalPages(newTotalPages));

        if (currentPage > newTotalPages) {
            dispatch(setCurrentPage(newTotalPages));
        }

    }, [filteredData.length, itemsPerPage, currentPage, dispatch]);

    // Pagination logic
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

    return (
        <ul className="item-search-list">
            <li
                className="item-search-list__header"
                style={{gridTemplateColumns: `2.5fr repeat(${columns.length}, 1fr)`}}
            >
                <p>Name</p>
                {columns.map((column) => (
                    <p key={column}>{column}</p>
                ))}
            </li>

            {paginatedData.map((item, index) => (
                <ItemSearchRow key={index} itemData={item} columnCount={columns.length} onDataClick={onDataClick} >
                    {rowFormat(item)}
                </ItemSearchRow>
            ))}
        </ul>
    );
};

export default ItemSearchList;