import React, { Component} from 'react';
import Tag from '../Common/Tag';
import CustomField from '../Common/CustomField'

const GroupListItem = (props) => {
    let { group } = props
    return (
        <tr>
            <td className="ModelList_Select">
                <i className="fa fa-folder-o"></i>
            </td>
            <td>
                <a href="#">{group.name}</a>
            </td>
            <td>{group.project_name}</td>
            <td>
                {
                    group.tags.map(item => 
                        <Tag 
                            name={item} 
                            key={item}
                        />)
                }                             
            </td>
            <td>
                {
                    group.custom_fields.map(item => 
                        <CustomField 
                            cfKey={item.key} 
                            cfValue={item.value}
                            key={item.key}
                        />)
                }

            </td>
            <td>{group.description}</td>
        </tr>
    )
}

export default GroupListItem