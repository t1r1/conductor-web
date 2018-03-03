import React, { Component } from 'react';
import FilterField from '../Common/FilterField';
import GroupListItem from './GroupListItem';
import axios from 'axios';

class GroupList extends Component {
    state = {
        groups: []
    }

    componentDidMount () {
        axios.get('/api/v1/groups/?_fields=_id,name,project_name,custom_fields,tags,description')
        .then(response => {
            this.setState({groups: response.data.data})
        })
    }
    render () {
        console.log(this.state.groups)
        let { groups } = this.state
        return (
            <div className="PageContent">
                <main className="PageMain">
                    <div className="ContentHeader">
                        <h2 className="ContentHeader_Title">Group List</h2>
                        <div className="ContentHeader_Buttons">
                            <button className="btn btn-success btn-sm text-uppercase">
                                <i className="fa fa-plus"></i> Create
                            </button>
                        </div>
                        <FilterField/>
                    </div>
                    <table className="ModelList">
                        <thead>
                            <tr>
                                <th className="ModelList_Select">
                                    <i className="fa fa-folder-o"></i>
                                </th>
                                <th>Name</th>
                                <th>Project</th>
                                <th>Tags</th>
                                <th>Custom Fields</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                groups.map(item =>  
                                    <GroupListItem group={item} key={item._id}/>
                                )
                            }
                        </tbody>
                    </table>
                </main>   
            </div>
        )
    }
}

export default GroupList