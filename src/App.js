import React, { Component } from 'react';
import {Route, Link, Switch, Redirect} from 'react-router-dom';
import PageHeader from './components/header/PageHeader';
import PageFooter from './components/footer/PageFooter';
import GroupList from './components/grouplist/Grouplist';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader/>
        <PageFooter/>

        {/* switch надо перенести */}
        <Switch>
          <Route exact path="/" component={App}/>
          <Route exact path="/groups" component={GroupList}/>

        </Switch>
      </div>

    );
  }
}

export default App;
