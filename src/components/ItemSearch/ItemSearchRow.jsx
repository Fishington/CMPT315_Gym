import {Link} from 'react-router-dom';

import './ItemSearchRow.scss'

function ItemSearchRow({itemData, children, columnLength}) {
    return (
        <li className="item-search-row">
            <Link
                className="item-search-row__container"
                to={`${itemData.id}`}
                style={{gridTemplateColumns: `2.5fr repeat(${columnLength}, 1fr)`}}
            >
                <div className="item-search-row__item">
                    <img className="item-search-row__image" src={itemData.image} alt={itemData.name}/>

                    <p>{itemData.name}</p>
                </div>

                {children}
            </Link>
        </li>
    );
}

export default ItemSearchRow;