'use strict';
import React, { Component } from 'react';
 import { Router } from '../';
 import { Nav } from '../../components';
 import './app.scss';

class App extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="app">
                <div className="head">
                    <Nav />
                </div>
                <div className="body">
                    <Router />
                </div>
            </div>
        );
    }
}
export default App;