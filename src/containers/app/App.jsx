'use strict';
import React, { Component } from 'react';
 import { Route } from '../';
 import { Nav } from '../../components';
 import './app.scss';

class App extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="app default">
                <div className="head">
                    <Nav />
                </div>
                <div className="body">
                    <Route />
                </div>
            </div>
        );
    }
}
export default App;