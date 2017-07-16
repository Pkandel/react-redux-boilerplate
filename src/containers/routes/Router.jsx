import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import  { Home, Dashboard }  from '../../components';

class Router extends Component {

    render() {


        return (
            <Switch>
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/my-new-location" render={() => <h1> My New Location </h1>}/>
                <Route exact path="/profile" render={() => <h1> My Profile </h1>}/>
                <Route exact path="/account" render={() => <h1> My Account </h1>}/>
                <Route exact path="/" component={Home}/>
                <Route path="/*" component={Home} />
            </Switch>
         );
    }
}
export default Router;