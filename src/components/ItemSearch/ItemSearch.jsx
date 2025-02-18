import React, {useState} from 'react';
import ItemSearchList from '@/components/ItemSearch/ItemSearchList';
import Pagination from '@/components/Pagination/Pagination.jsx';
import SearchBar from '@/components/SearchBar';

import './ItemSearch.scss';

const ItemSearch = ({data, columns, rowFormat}) => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <>
            <div className="item-search__search-bar">
                <SearchBar
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />
            </div>

            <ItemSearchList
                searchTerm={searchTerm}
                data={data}
                columns={columns}
                rowFormat={rowFormat}
            />
            
            <Pagination/>
        </>
    );
};


export default ItemSearch;
