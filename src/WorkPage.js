import React, { Component } from 'react';
import matchingScreenshot from './matchingScreenshot.png';
import joblyScreenshot from './joblyScreenshot.png';

class WorkPage extends Component {
  render() {
    return (
      <div className="WorkPage col d-flex align-items-center justify-content-center">
        <div className="row pt-5">
          <div className="WorkPage text-center">
            <h1>Check out my work!</h1>
            <div className="row pt-5 view overlay">
              <div className="col-lg-4 mx-5">
                <div class="mask flex-center rgba-blue-light">
                  <div class="card" style={{ width: '18rem' }}>
                    <a href="https://katiejessupmcd.github.io/matching_game/">
                      <img
                        class="card-img-top"
                        src={matchingScreenshot}
                        alt="matchingScreenshot"
                      />
                    </a>
                    <div class="card-body">
                      <p class="card-text">Matching Game!</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mx-5">
                <div class="card" style={{ width: '18rem' }}>
                  <a href="https://react-jobly-frontend-katieg.herokuapp.com/">
                    <img
                      class="card-img-top"
                      src={joblyScreenshot}
                      alt="joblyScreenshot"
                    />
                  </a>
                  <div class="card-body">
                    <p class="card-text">Jobly- Mock job application</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkPage;
