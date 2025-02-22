import ItemSearchRow from "@/components/ItemSearch/ItemSearchRow.jsx";

import './ItemSearchList.scss'
import {useItemSearch} from "@/context/ItemSearchContext.jsx";

const ItemSearchList = ({data, columns, rowFormat}) => {
    const {searchTerm, selectedFilters} = useItemSearch();

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
                <ItemSearchRow key={index} itemData={item} columnCount={columns.length}>
                    {rowFormat(item)}
                </ItemSearchRow>
            ))}
        </ul>
    )
};

export default ItemSearchList;