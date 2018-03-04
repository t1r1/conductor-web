import React, { Component } from 'react';
import axios from 'axios';
import Tag from '../Common/Tag';
import CustomField from '../Common/CustomField';
import { Link } from 'react-router-dom';
import RelationsList from '../Common/RelationsList';

class GroupView extends Component {
    state = {
        group: {
            all_custom_fields: [],
            all_tags: [],
            tags: [],
            custom_fields: [],
            project_name: '',
            name: '',
            description: '',
            hosts: [],
            children: []
        }
    }

    componentDidMount () {
        let {name} = this.props.match.params

        axios.get('/api/v1/groups/' + name + 
        '?_fields=_id,name,project_name,custom_fields,all_custom_fields,tags,all_tags,description,hosts,children')
        .then(response => {
            this.setState({group: response.data.data[0]})
        })
    }


    render () {
        console.log(this.state.group)
        let {group} = this.state

        return (
            <div className="PageContent">
                <main className="PageMain">
                    <div className="ContentHeader">
                        <h2 className="ContentHeader_Title">View Group</h2>
                        <div className="ContentHeader_Buttons">
                            <button className="btn btn-primary btn-sm text-uppercase">
                                <i className="fa fa-edit"></i> Edit
                            </button>
                            {' '}
                            <button className="btn btn-success btn-sm text-uppercase">
                                <i className="fa fa-plus"></i> New
                            </button>
                            {' '}
                            <button className="btn btn-success btn-sm text-uppercase">
                                <i className="fa fa-copy"></i> Clone
                            </button>
                        </div>
                    </div>
                    <div className="PageContentContainer PageContentContainer--Half">
                        <div className="Card">
                            <div className="CardHeader">
                                <h3 className="Group">{group.name}</h3>
                                <div className="Card_Field">{group.description}</div>
                            </div>
                            <div className="row">
                                <div className="col-sm-5">
                                    <div className="Card_Field">
                                        <label className="Card_FieldLabel">Tags</label>
                                        <div className="Card_TagList">
                                            {
                                                group.all_tags.map(item => {
                                                    let derived = !group.tags.includes(item)
                                                    return (
                                                        <Tag name={item} key={item} derived={derived}/>
                                                    )  
                                                })      
                                            }
                                        </div>
                                    </div>
                                    <div className="Card_Field">
                                        <label className="Card_FieldLabel">Custom Fields</label>
                                        {
                                            group.all_custom_fields.map(item => 
                                                <CustomField 
                                                    cfKey={item.key} 
                                                    cfValue={item.value} 
                                                    key={item.key}/>
                                                )
                                        }
                                    </div>
                                </div>
                                <div className="col-sm-7">
                                    <div className="Card_Field">
                                        <label className="Card_FieldLabel">Project</label>
                                        <div className="Project">
                                            <Link to={`/projects/${group.project_name}`}>{group.project_name}</Link></div>
                                    </div>
                                    <div className="Card_Field">
                                        <label className="Card_FieldLabel">Direct children</label>
                                        <RelationsList 
                                            items={group.children}
                                            type="groups"
                                            field="name" 
                                            itemClass="Group"/>
                                    </div>
                                    <div className="Card_Field">
                                        <label className="Card_FieldLabel">Direct hosts</label>
                                        <RelationsList 
                                            items={group.hosts}
                                            type="hosts"
                                            field="fqdn" 
                                            itemClass="Host"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main> 
            </div>
        )
    }

}

export default GroupView