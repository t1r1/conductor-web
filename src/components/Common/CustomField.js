import React, { Component } from 'react';
import './CustomField.css';

const CustomField = (props) => {
    return (
        <span className="CF">
            <span className="CF_Key">{props.cfKey}</span> {' '}
            <span className="CF_Value">{props.cfValue}</span>
        </span> 
    )
}

export default CustomField