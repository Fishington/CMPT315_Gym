import React from 'react';
import './ItemDetails.scss';

function ItemDetails({details}) {
    return (
        <div className="item-detail">
            {details.map((detail) => (
                <section key={detail.value} className="item-detail__tag">
                    {detail.icon}

                    <div>
                        <h3>{detail.value}</h3>
                        <p className="subtitle">{detail.subtitle}</p>
                    </div>
                </section>
            ))}
        </div>
    );
}

export default ItemDetails;
