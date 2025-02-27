import React from 'react';

import ItemSearchList from "@/components/ItemSearch/ItemSearchList.jsx";
import Pagination from '@/components/Pagination';
import SearchBar from '@/components/SearchBar';
import SearchFilters from "@/components/SearchFilters/SearchFilters.jsx";

import './ItemSearch.scss';
import {ItemSearchProvider} from "@/context/ItemSearchContext.jsx";

const ItemSearch = ({filters, data, columns, rowFormat, searchBarContent, onDataClick, itemsPerPage = 24}) => {
    return (
        <ItemSearchProvider itemsPerPage={itemsPerPage} onDataClick={onDataClick}>
            <SearchBar>
                {searchBarContent ? searchBarContent : ''}
            </SearchBar>

            {filters && <SearchFilters filters={filters}/>}

            <ItemSearchList
                data={data}
                columns={columns}
                rowFormat={rowFormat}
            />

            <Pagination/>
        </ItemSearchProvider>
    );
};


export default ItemSearch;
