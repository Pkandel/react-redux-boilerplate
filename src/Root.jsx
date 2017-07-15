"use strict";
import React, { Component } from 'react';
import './root.scss';
class Root extends Component {
    render() {
        const todos = {
            first: "this is first todo",
            second:"this is second todo"
        };
        return (
            <div>
                <pre>{JSON.stringify(todos,null, 2)}</pre>

            </div>
        );
    }
}

export default Root;