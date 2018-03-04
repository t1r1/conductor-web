import React, { Component } from 'react';
import FilterField from '../Common/FilterField';
import HostListItem from './HostListItem';
import Api from '../../api/Api';
import Pagination from '../Common/Pagination';

class HostList extends Component {
    state = {
        hosts: [],
        page: 1,
        filter: '',
        totalPages: 0
    }

    componentDidMount () {
        let { page, filter} = this.state
        this.loadData(page, filter)
    }

    loadData (page, filter) {
        Api.Hosts.List(page, filter)
        .then(response => {
            let { total_pages, data, page } = response.data
            if (page > total_pages) {

                //* здесь баг, дописать
                page = total_pages
                this.loadData()
                return;
            }
            this.setState({hosts: data, totalPages: total_pages, page})
            console.log(response.data)
        })
    }

    filterChange = (e) => {
        let { value } = e.target
        this.setState({filter: value})
        this.loadData(this.state.page, value)
        this.props.history.push({ 'search': `page=${this.state.page}&filter=${value}` })
    }

    handlePageChanged(page) {
        this.setState({page})
        this.loadData(page, this.state.filter)
        this.props.history.push({ 'search': `page=${page}&filter=${this.state.filter}` })
    }

    render () {
        let { hosts, filter } = this.state
        return (
            <div className="PageContent">
                <main className="PageMain">
                    <div className="ContentHeader">
                        <h2 className="ContentHeader_Title">Host List</h2>
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
                                <th>fqdn</th>
                                <th>datacenter</th>
                                <th>group</th>
                                <th>tags</th>
                                <th>custom fields</th>
                                <th>description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                hosts.map(item =>  
                                    <HostListItem host={item} key={item._id}/>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="Pagination">
                        <Pagination 
                            className="text-center" 
                            current={this.state.page} 
                            total={this.state.totalPages} 
                            onChangePage={this.handlePageChanged.bind(this)} />
                    </div>
                </main>   
            </div>
        )
    }
}

export default HostList