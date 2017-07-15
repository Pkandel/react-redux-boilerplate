import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import  { Home, Dashboard }  from '../../components';

class Router extends Component {

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route  path="/dashboard" component={Dashboard} />
                <Route path="*" component={Home}/>
            </Switch>
         );
    }
}
export default Router;