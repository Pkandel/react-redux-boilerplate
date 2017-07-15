'use strict';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './nav.scss';

class Nav extends Component {

    render() {
        return(
            <div className="navbar">
                <li> <NavLink exact to="/" activeClassName="active">Home </NavLink></li>
                <li><NavLink exact to="/dashboard" activeClassName="active">Dashboard </NavLink></li>
            </div>
        );
    }
}
export default Nav;

//Remarks
/****************************************************
 1.exact to is needed in Navlink to work for activeClassName style.







 *******************************************************/