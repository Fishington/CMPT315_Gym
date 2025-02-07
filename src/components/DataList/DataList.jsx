import React from 'react';
import './DataList.scss';

function DataList({children, columns}) {
    return (
        <ul className="data-list">
            <li
                className="data-list__header"
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

export default DataList;