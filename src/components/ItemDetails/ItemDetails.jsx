import React from 'react';
import './ItemDetails.scss';

function ItemDetails({details}) {
    return (
        <div className="item-detail">
            {details.map((detail) => (
                <ItemDetailTag
                    key={detail.value}
                    icon={detail.icon}
                    value={detail.value}
                    subtitle={detail.subtitle}
                />
            ))}
        </div>
    );
}

function ItemDetailTag({icon, value, subtitle}) {
    return (
        <section className="item-detail__tag">
            {icon}
            <div>
                <h3>{value}</h3>
                <p className="subtitle">{subtitle}</p>
            </div>
        </section>
    );
}

export default ItemDetails;
