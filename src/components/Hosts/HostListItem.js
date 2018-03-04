import React from 'react';
import Tag from '../Common/Tag';
import CustomField from '../Common/CustomField';
import { Link } from 'react-router-dom';

const HostListItem = (props) => {
    let { host } = props
    return (
        <tr>
            <td className="ModelList_Select">
                <i className="fa fa-folder-o"></i>
            </td>
            <td>
                <Link to={`/groups/${host.fqdn}`}>{host.fqdn}</Link>
            </td>
            <td>{host.datacenter_name}</td>
            <td>{host.group_name}</td>
            <td>
                {
                    host.tags.map(item => 
                        <Tag 
                            name={item} 
                            key={item}
                        />)
                }                             
            </td>
            <td>
                {
                    host.custom_fields.map(item => 
                        <CustomField 
                            cfKey={item.key} 
                            cfValue={item.value}
                            key={item.key}
                        />)
                }

            </td>
            <td>{host.description}</td>
        </tr>
    )
}

export default HostListItem