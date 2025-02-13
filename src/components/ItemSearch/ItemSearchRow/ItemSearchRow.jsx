import React from 'react';
import {Link} from 'react-router-dom';
import './ItemSearchRow.scss';

function ItemSearchRow({children, data, columnsNum}) {
    return (
        <li className="item-search-row" key={data.id}>
            <Link
                className="item-search-row__container"
                to={`${data.id}`}
                style={{gridTemplateColumns: `2.5fr repeat(${columnsNum}, 1fr)`}}
            >
                <div className="item-search-row__item">
                    <img className="item-search-row__image" src={data.image} alt=""/>
                    <p>{data.name}</p>
                </div>

                {children}
            </Link>
        </li>
    );
}

export default ItemSearchRow;