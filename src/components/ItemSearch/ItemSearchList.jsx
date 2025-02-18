import ItemSearchRow from '@/components/ItemSearch/ItemSearchRow';

import './ItemSearchList.scss'

function ItemSearchList({searchTerm, data, columns, rowFormat}) {
    const filteredData = data.filter(
        item => item.name.toLowerCase().includes(searchTerm.toLowerCase())
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
                <ItemSearchRow key={index} itemData={item} columnLength={columns.length}>
                    {rowFormat(item)}
                </ItemSearchRow>
            ))}
        </ul>
    );
}

export default ItemSearchList;