import React from 'react';
import './LevelTag.scss'

function LevelTag({level}) {
    return (
        <p className={`level level--${level.toLowerCase()}`}>{level}</p>
    );
}

export default LevelTag;