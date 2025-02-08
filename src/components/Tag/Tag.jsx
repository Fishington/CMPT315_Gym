import React from 'react';
import './Tag.scss'

function Tag({tagTitle}) {
    return (
        <p className={`tag tag--${tagTitle.toLowerCase()}`}>{tagTitle}</p>
    );
}

export default Tag;