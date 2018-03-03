import React from 'react';
import './Tag.css';

const Tag = (props) => {
    return (
        <span className="Tag">{props.name}</span>
    )
}

export default Tag