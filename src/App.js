import React, { Component } from 'react';
import NavBar from './NavBar';
import Routes from './Routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <NavBar />
        <Routes />
      </div>
    );
  }
}

export default App;
