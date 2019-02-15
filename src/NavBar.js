import React, { Component } from 'react';
import './App.css';

class NavBar extends Component {
  render() {
    const activeStyle = {
      fontWeight: 'bold'
    };
    return (
      <div id="container">
        <nav className="navbar navbar-expand-lg mr-auto fixed-top" style={{fontSize:"1.5rem", backgroundColor: '#EEE2DC'}}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item px-2">
              <a activestyle={activeStyle} href="#home">
                Home
              </a>
            </li>
            <li className="nav-item px-2">
              <a activestyle={activeStyle} href="#about">
                About
              </a>
            </li>
            <li className="nav-item px-2">
              <a activestyle={activeStyle} href="#work">
                Work
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
