import React, { Component } from 'react';
import HomePageInfo from './HomePageInfo';
import ContactButtons from './ContactButtons';

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="HomePage col d-flex align-items-center justify-content-center">
          <HomePageInfo />
        </div>
        <div className="ContactButtons">
          <ContactButtons />
        </div>
      </div>
    );
  }
}

export default HomePage;
