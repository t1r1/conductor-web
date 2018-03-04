import React from 'react';

const FilterField = (props) => {
    return (
        <div className="ContentHeader_SearchField">
            <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                        <i className="fa fa-search"></i>
                    </span>
                </div>
                <input type="text" className="form-control" placeholder="FILTER" aria-label="Filter" aria-describedby="basic-addon1"/>
            </div>
        </div>
    )
}

export default FilterField