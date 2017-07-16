'use strict';
import React, {Component} from 'react';
import {NavLink, Route} from 'react-router-dom';
import {Dropdown} from '../';
import './nav.scss';

class Nav extends Component {


    render() {
        const user = {
            name: "prakash",
            image: "./images/user.png"
        };
        const className = "default";
        const ButtonToNavigate = ({title, history}) => (
            <button
                type="button"
                onClick={() => history.push('/my-new-location')}
            >
                {title}
            </button>
        );
        const Profile = ({title, history}) => (
            <button
                type="button"
                onClick={() => history.push('/profile')}
            >
                {title}
            </button>
        );
        const Account = ({title, history}) => (
            <button
                type="button"
                onClick={() => history.push('/account')}
            >
                {title}
            </button>
        );
        const DropdownComponent = ({history}) => (
            <Dropdown
                type="button"
                user={user}
                dropdownListItem={[{
                    name: "account",
                    onClick: () => history.push('/account'),
                    icon: "settings"
                },
                    {
                        name: "profile",
                        onClick: () => history.push('/profile'),
                        icon: "exit_to_app"
                    }]}
            />

        );
        return (
            <div className="navbar">
                <li><NavLink exact to="/" activeClassName="active">Home </NavLink></li>
                <li><NavLink exact to="/dashboard" activeClassName="active">Dashboard </NavLink></li>
                <li><Route path="/" render={(props) => <ButtonToNavigate {...props} title="Button as NavLivk"/>}/></li>
                <li><Route path="/" render={(props) => <DropdownComponent {...props}  />}/></li>
            </div>
        );
    }
}
export default Nav;

//Remarks
/****************************************************
 1.exact to is needed in Navlink to work for activeClassName style.







 *******************************************************/