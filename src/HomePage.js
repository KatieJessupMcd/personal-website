import React, { Component } from 'react';
import HomePageInfo from './HomePageInfo';
import ContactButtons from './ContactButtons';

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <div className="HomePageInfo">
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
