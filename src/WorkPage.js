import React, { Component } from 'react';
import matchingScreenshot from './matchingScreenshot.png';
import joblyScreenshot from './joblyScreenshot.png';

class WorkPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="WorkPage">
          <h1>This will be the Work Page </h1>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-xs-4">
              <a href="https://katiejessupmcd.github.io/matching_game/">
                <img
                  style={{ width: '300px' }}
                  class="img-responsive"
                  src={matchingScreenshot}
                  alt="matchingScreenshot"
                />
              </a>
            </div>
            <div className="col-lg-4 col-md-4 col-xs-4">
              <a href="https://react-jobly-frontend-katieg.herokuapp.com/">
                <img
                  style={{ width: '300px' }}
                  class="img-responsive"
                  src={joblyScreenshot}
                  alt="joblyScreenshot"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkPage;
