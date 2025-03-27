import './ItemSearchRow.scss'

const ItemSearchRow = ({children, itemData, columnCount, onDataClick }) => {
    return (
        <li className="item-search-row">
            <div
                className="item-search-row__container"
                onClick={() => onDataClick ? onDataClick(itemData) : null}
                style={{gridTemplateColumns: `2.5fr repeat(${columnCount}, 1fr)`}}
            >
                <div className="item-search-row__item">
                    <j1>{itemData.name}</j1>
                </div>

                {children}
            </div>
        </li>
    );
};

export default ItemSearchRow;