import React, { Component } from 'react';
import HomePageInfo from './HomePageInfo';
import ContactButtons from './ContactButtons';
// import WorkPage from './WorkPage';
import JoblyProjectPage from './JoblyProjectPage';
import WarblerProjectPage from './WarblerProjectPage';
import MatchingGameProjectPage from './MatchingGameProjectPage';  
import AboutPage from './AboutPage';

class HomePage extends Component {
  render() {
    return (
      <div class="container-fluid">
        <div className="HomePage row" style={{minHeight: '25vh'}}>
          <div className="col-1" />
          <div className="col-10 p-0">
            <div className="HomePage col d-flex align-items-center justify-content-center">
              <HomePageInfo />
            </div>
          </div>
        </div>

        <div className="JoblyProjectPage row" style={{minHeight: '40vh'}}>
          <div className="col-1" />
          <div className="col-10 p-0">
            {/* <div className="JoblyProjectPage col d-flex align-items-center justify-content-center"> */}
              <JoblyProjectPage />
            {/* </div> */}
          </div>
        </div>
        <div className="WarblerProjectPage row" style={{minHeight: '40vh'}}>
          <div className="col-1" />
          <div className="col-10 p-0">
            {/* <div className="WarblerProjectPage col d-flex align-items-center justify-content-center"> */}
              <WarblerProjectPage />
            {/* </div> */}
          </div>
        </div>
        <div className="MatchingGameProjectPage row" style={{minHeight: '40vh'}}>
          <div className="col-1" />
          <div className="col-10 p-0">
            {/* <div className="MatchingGameProjectPage col d-flex align-items-center justify-content-center"> */}
              <MatchingGameProjectPage />
            {/* </div> */}
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

        <ContactButtons />
      </div>
    );
  }
}

export default HomePage;
