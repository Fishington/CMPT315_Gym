import React from 'react';

import './ItemDetailsTag.scss'

function ItemDetailCard({icon, value, subtitle}) {
    return (
        <section className="item-detail">
            {icon}
            
            <div>
                <h3>{value}</h3>
                <p className="subtitle">{subtitle}</p>
            </div>
        </section>
    );
}

export default ItemDetailCard;