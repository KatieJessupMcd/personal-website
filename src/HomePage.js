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
          <div className="col-1" />
          <div className="col-10 p-0">
            <div className="HomePage col d-flex align-items-center justify-content-center">
              <HomePageInfo />
            </div>
          </div>
        </div>  

          <div className="AboutPage row">
            <div className="col-1" />
            <div className="col-10 p-0">
              <div className="AboutPage col d-flex align-items-center justify-content-center">
                <AboutPage />
              </div>
            </div>
          </div>

          <div className="WorkPage row">
            <div className="col-1" />
            <div className="col-10 p-0">
              <div className="WorkPage col d-flex align-items-center justify-content-center">
                <WorkPage />
              </div>
            </div>
          </div>
          <ContactButtons />
        </div>
      // </div>
    );
  }
}

export default HomePage;
