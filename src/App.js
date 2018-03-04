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

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader/>
        <Switch>
          <Route exact path="/groups" component={GroupList}/>
          <Route path="/groups/:id/edit" component={GroupEdit}/>
          <Route path="/groups/:name" component={GroupView}/>
          <Redirect from="*" to="/groups"/>
        </Switch>
        <PageFooter/>
      </div>

    );
  }
}

export default App;
