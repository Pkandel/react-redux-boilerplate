'use strict';
import React, { Component } from 'react';
import * as API from 'api/api_url';

class Home extends Component {

    render() {
        return(
            <div className="navbar">
                <h1> this is Home</h1>
                {API.baseURL}
            </div>
        );
    }
}
export default Home;
