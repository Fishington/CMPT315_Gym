import {useItemSearch} from "@/context/ItemSearchContext.jsx";
import './ItemSearchRow.scss'

const ItemSearchRow = ({children, itemData, columnCount}) => {
    const {onDataClick} = useItemSearch()

    return (
        <li className="item-search-row">
            <div
                className="item-search-row__container"
                onClick={() => onDataClick ? onDataClick(itemData) : null}
                style={{gridTemplateColumns: `2.5fr repeat(${columnCount}, 1fr)`}}
            >
                <div className="item-search-row__item">
                    <img className="item-search-row__image" src={itemData.image} alt={itemData.name}/>
                    <p>{itemData.name}</p>
                </div>

                {children}
            </div>
        </li>
    );
};

export default ItemSearchRow;