 "use strict";
import React, { Component } from 'react';
import  { App }  from './containers';

import { BrowserRouter } from 'react-router-dom';
class Root extends Component {
    render() {
        return (
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );
    }
}

export default Root;