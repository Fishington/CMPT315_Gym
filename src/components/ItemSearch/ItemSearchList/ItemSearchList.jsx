import './ItemSearchList.scss';

function ItemSearchList({children, columns}) {
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
            
            {children}
        </ul>
    );
}

export default ItemSearchList;