import React, { Component } from 'react';
import HomePageInfo from './HomePageInfo';
import ContactButtons from './ContactButtons';
import WorkPage from './WorkPage'; 
import AboutPage from './AboutPage'; 

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="HomePage row">
          <div className="HomePage col d-flex align-items-center justify-content-center">
            <HomePageInfo />
          </div>
        </div>
        <div className="AboutPage row">
          <div className="AboutPage col d-flex align-items-center justify-content-center">
            <AboutPage />
          </div>
        </div>
        <div className="WorkPage row">
          <div className="WorkPage col d-flex align-items-center justify-content-center">
            <WorkPage />
          </div>
        </div>
        <div className="ContactButtons row">
          <div className="ContactButtons col d-flex align-items-center justify-content-center">
            <ContactButtons />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
