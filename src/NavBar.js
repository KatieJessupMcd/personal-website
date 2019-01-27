import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import './NavBar.css';

class NavBar extends Component {
  render() {
    const activeStyle = {
      fontWeight: 'bold'
    };
    return (
      <nav
        className="navbar navbar-expand-lg navbar-primary border-bottom"
        // style={{ backgroundColor: 'white' }}
      >
        <div className="container">
          <NavLink
            activeStyle={activeStyle}
            className="navbar-brand navbar-nav mr-auto"
            exact
            to="/"
          >
            Home
          </NavLink>

          <div className="navbar" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink
                  activeStyle={activeStyle}
                  className="nav-link"
                  to="/work"
                >
                  Work
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeStyle={activeStyle}
                  className="nav-link"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeStyle={activeStyle}
                  className="nav-link"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item" />
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
