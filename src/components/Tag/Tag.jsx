import React from 'react';
import './Tag.scss'

function Tag({tagTitle, color, size}) {
    return (
        <p className={`tag tag--${color} tag--${size}`}>{tagTitle}</p>
    );
}

export default Tag;