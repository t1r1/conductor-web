import React, { Component } from 'react';
import {Route, Link, Switch, Redirect} from 'react-router-dom';
import PageHeader from './components/header/PageHeader';
import PageFooter from './components/footer/PageFooter';
import GroupList from './components/grouplist/GroupList';
import GroupEdit from './components/groupedit/GroupEdit';
import './css/normalize.css';
import './css/bootstrap-flatly.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader/>
        <PageFooter/>
        <Switch>
          <Route exact path="/groups" component={GroupList}/>
          <Route path="/groups/:id/edit" component={GroupEdit}/>
        </Switch>
      </div>

    );
  }
}

export default App;
