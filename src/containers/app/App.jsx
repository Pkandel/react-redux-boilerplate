'use strict';
import React, { Component } from 'react';
 import { Router } from '../';
 import { Nav } from '../../components';

class App extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <Nav />
                <div className="body">
                    <Router />
                </div>
            </div>
        );
    }
}
export default App;