import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ItemSearchList from "@/components/ItemSearch/ItemSearchList.jsx";
import Pagination from '@/components/Pagination';
import SearchBar from '@/components/SearchBar';
import SearchFilters from "@/components/SearchFilters/SearchFilters.jsx";

import './ItemSearch.scss';

import { setItemsPerPage } from '@/redux/actions/itemSearchActions';

const ItemSearch = ({ filters, data, columns, rowFormat, searchBarContent, onDataClick, itemsPerPage = 24 }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setItemsPerPage(itemsPerPage));
    }, [dispatch, itemsPerPage]);

    return (
        <>
            <SearchBar>
                {searchBarContent || ''}
            </SearchBar>

            {filters && <SearchFilters filters={filters} />}

            <ItemSearchList
                data={data}
                columns={columns}
                rowFormat={rowFormat}
                onDataClick={onDataClick}
            />

            <Pagination />
        </>
    );
};

export default ItemSearch;