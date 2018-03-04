import React, { Component } from 'react';
import FilterField from '../Common/FilterField';
import GroupListItem from './GroupListItem';
import Api from '../../api/Api';

class GroupList extends Component {
    state = {
        groups: [],
        page: 1,
        filter: ''
    }

    componentDidMount () {
        let { page, filter} = this.state
        this.loadData(page, filter)
    }

    loadData (page, filter) {
        Api.Groups.List(page, filter)
        .then(response => {
            this.setState({groups: response.data.data})
        })
    }

    filterChange = (e) => {
        let { value } = e.target
        this.setState({filter: value})
        this.loadData(this.state.page, value)
    }

    render () {
        let { groups, filter } = this.state
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
                        <FilterField onChange={this.filterChange} value={filter}/>
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