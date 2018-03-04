import React from 'react';
import './RelationsList.css';
import { Link } from 'react-router-dom';

const RelationsList = (props) => {
    return (
        <ul className="RelationsList">
            {props.items.map (item => 
                <li key={item._id} className={`RelationsList_Item ${props.itemClass}`}>
                    <Link to={`/${props.type}/${item[props.field]}`}>{item[props.field]}</Link>
                </li>
            )}
        </ul>
    )
}

export default RelationsList