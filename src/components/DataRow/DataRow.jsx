import React from 'react';
import {Link} from 'react-router-dom';
import './DataRow.scss';

function DataRow({children, data, columnsNum}) {
    return (
        <li className="data-row" key={data.id}>
            <Link 
                className="data-row__container" 
                to={`${data.id}`}
                style={{gridTemplateColumns: `2.5fr repeat(${columnsNum}, 1fr)`}}
            >
                <div className="data-row__item">
                    <img className="data-row__image" src={data.image} alt=""/>
                    <p>{data.name}</p>
                </div>
                
                {children}
            </Link>
        </li>
    );
}

export default DataRow;