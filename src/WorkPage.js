import React, { Component } from 'react';
import matchingScreenshot from './matchingScreenshot.png';
import joblyScreenshot from './joblyScreenshot.png';

class WorkPage extends Component {
  render() {
    return (
      <div className="WorkPage col d-flex align-items-center justify-content-center">
        <div className="row pt-5">
          <div className="WorkPage text-center">
            <h1>Check out my portfolio:</h1>
            <div className="row pt-5">
              <div className="col-lg-4 mx-5">
                <a href="https://katiejessupmcd.github.io/matching_game/">
                  <img
                    style={{ width: '300px' }}
                    class="img-responsive"
                    src={matchingScreenshot}
                    alt="matchingScreenshot"
                  />
                </a>
              </div>
              <div className="col-lg-4 mx-5">
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
      </div>
    );
  }
}

export default WorkPage;
