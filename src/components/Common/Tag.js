import React from 'react';
import './Tag.css';
import classnames from 'classnames';


const Tag = (props) => {
    let classes = classnames({ 
        "Tag": true,
        "Tag--Derived": props.derived
    })
    return (
        <div className={classes}>{props.name}</div>
    )
}

export default Tag