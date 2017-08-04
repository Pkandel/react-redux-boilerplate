 "use strict";
import React, { Component } from 'react';

import { BrowserRouter } from 'react-router-dom';
class Root extends Component {
    render() {
        return (
            <BrowserRouter>
                <h1>React Redux Boilerplate </h1>
            </BrowserRouter>
        );
    }
}

export default Root;