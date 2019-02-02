import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';
import './grid.css'; 

class NavBar extends Component {
  render() {
    const activeStyle = {
      fontWeight: 'bold'
    };
    return (
      <div id="container">
        <nav>
          <ol>
            <li>
              <NavLink activeStyle={activeStyle} exact to="/">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink activeStyle={activeStyle} to="/work">
                Work
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={activeStyle} to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={activeStyle} to="/contact">
                Contact
              </NavLink>
            </li>
          </ol>
        </nav>
      </div>
    );
  }
}

export default NavBar;
