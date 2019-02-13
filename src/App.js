import React, { Component } from 'react';
import NavBar from './NavBar';
import Routes from './Routes';
import './App.css';


class App extends Component {
  render() {
    return (
      <div id="container">
        {/* <NavBar /> */}
        <Routes />
      </div>
    );
  }
}

export default App;
