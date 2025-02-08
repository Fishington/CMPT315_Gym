import React from 'react';

import './ItemDetail.scss'

function ItemDetailCard({icon, value, subtitle}) {
    return (
        <div className="item-detail">
            {icon}
            <div>
                <h3>{value}</h3>
                <p className="subtitle">{subtitle}</p>
            </div>
        </div>
    );
}

export default ItemDetailCard;