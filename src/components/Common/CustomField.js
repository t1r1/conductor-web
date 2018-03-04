import React from 'react';
import './CustomField.css';

const CustomField = (props) => {
    return (
        <div className="CF">
            <span className="CF_Key">{props.cfKey}</span> {' '}
            <span className="CF_Value">{props.cfValue}</span>
        </div> 
    )
}

export default CustomField