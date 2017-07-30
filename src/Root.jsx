 "use strict";
import React, { Component } from 'react';

import { BrowserRouter } from 'react-router-dom';
class Root extends Component {
    render() {
        return (
            <BrowserRouter>
                <h1>React Redux Boilerplate {process.env.NODE_ENV}</h1>
            </BrowserRouter>
        );
    }
}

export default Root;