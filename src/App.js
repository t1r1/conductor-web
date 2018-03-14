import './extraStyles/normalize.css';
import './extraStyles/bootstrap-flatly.css';
import './extraStyles/font-awesome.css';
import './extraStyles/fonts.css';

import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import PageHeader from './components/Page/PageHeader';
import PageFooter from './components/Page/PageFooter';
import GroupList from './components/Groups/GroupList';
import GroupEdit from './components/Groups/GroupEdit';
import GroupView from './components/Groups/GroupView';
import HostList from './components/Hosts/HostList';
import HostListItem from './components/Hosts/HostListItem';
import ProjectList from './components/Projects/ProjectList';
import ProjectListItem from './components/Projects/ProjectListItem';
import LoginPage from './components/Page/LoginPage'
import { connect } from 'react-redux';
import axios from 'axios';
import Api from './api/Api';
import { AUTHENTICATING, AUTHENTICATED, LOGIN } from './reducers/auth';
import store from './store'
import { setAuthState } from './actions/actionCreators'

class App extends Component {

    componentDidMount () {
        Api.Account.Me()
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err.response.data)
            if (err.response.data.state === 'logged out') {
                store.dispatch(setAuthState({
                    authState: LOGIN,
                    user: null
                }))
            }
        })
    }

    getPageContents = (authState) => {
        switch (authState) {
            case AUTHENTICATING:
                return (<div>Loading</div>)
            case AUTHENTICATED:
                return (
                    <div>
                        <PageHeader/>
                        <Switch>
                            <Route exact path="/groups" component={GroupList}/>
                            <Route path="/groups/:id/edit" component={GroupEdit}/>
                            <Route path="/groups/:name" component={GroupView}/>
                            <Route exact path="/hosts" component={HostList}/>
                            <Route path="/hosts:name" component={HostListItem}/>
                            <Route exact path="/projects" component={ProjectList}/>
                            <Route path="/projects:name" component={ProjectListItem}/>
                            <Redirect from="*" to="/groups"/>
                        </Switch>
                        <PageFooter/>
                    </div>
                )
            case LOGIN:
                return <LoginPage />
        }
    }

    render() {
        let { authState } = this.props
        return (
            <div className="App">
                {
                    this.getPageContents(authState)
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        authState: state.auth.authState
    }
}

export default connect(mapStateToProps)(App);
