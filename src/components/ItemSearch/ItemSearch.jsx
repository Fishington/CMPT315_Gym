import React, {createContext, useContext, useState} from 'react';
import {Link} from 'react-router-dom';

import Pagination from '@/components/Pagination';
import SearchBar from '@/components/SearchBar';

import './ItemSearch.scss';

const ItemSearchContext = createContext(null);

const ItemSearch = ({data, columns, rowFormat, searchBarContent}) => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <ItemSearchContext.Provider value={{searchTerm, data, columns, rowFormat}}>
            <div className="item-search__search-bar">
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}>
                    {searchBarContent ? searchBarContent : ''}
                </SearchBar>
            </div>

            <ItemSearchList/>
            <Pagination/>
        </ItemSearchContext.Provider>
    );
};

const ItemSearchList = () => {
    const {searchTerm, data, columns, rowFormat} = useContext(ItemSearchContext);

    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

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

            {filteredData.map((item, index) => (
                <ItemSearchRow key={index} itemData={item}>
                    {rowFormat(item)}
                </ItemSearchRow>
            ))}
        </ul>
    );
};

const ItemSearchRow = ({children, itemData}) => {
    const {columns} = useContext(ItemSearchContext);

    return (
        <li className="item-search-row">
            <Link
                className="item-search-row__container"
                to={`${itemData.id}`}
                style={{gridTemplateColumns: `2.5fr repeat(${columns.length}, 1fr)`}}
            >
                <div className="item-search-row__item">
                    <img className="item-search-row__image" src={itemData.image} alt={itemData.name}/>
                    <p>{itemData.name}</p>
                </div>

                {children}
            </Link>
        </li>
    );
};

export default ItemSearch;
