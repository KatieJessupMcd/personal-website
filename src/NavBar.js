import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

class NavBar extends Component {
  render() {
    const activeStyle = {
      fontWeight: 'bold'
    };
    return (
      <div id="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mr-auto">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item px-2">
              <NavLink activeStyle={activeStyle} exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink activeStyle={activeStyle} to="/work">
                Work
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink activeStyle={activeStyle} to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink activeStyle={activeStyle} to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
