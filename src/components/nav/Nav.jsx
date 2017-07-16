'use strict';
import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import './nav.scss';

class Nav extends Component {

    render() {
        const ButtonToNavigate = ({ title, history }) => (
            <button
                type="button"
                onClick={() => history.push('/my-new-location')}
            >
                {title}
            </button>
        );
        return(
            <div className="navbar">
                <li> <NavLink exact to="/" activeClassName="active">Home </NavLink></li>
                <li><NavLink exact to="/dashboard" activeClassName="active">Dashboard </NavLink></li>
                <Route path="/" render={(props) => <ButtonToNavigate {...props} title="Button as NavLivk"/>} />
            </div>
        );
    }
}
export default Nav;

//Remarks
/****************************************************
 1.exact to is needed in Navlink to work for activeClassName style.







 *******************************************************/