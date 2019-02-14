import React, { Component } from 'react';
import matchingScreenshot from './matchingScreenshot.png';
import joblyScreenshot from './joblyScreenshot.png';
import warblerScreenshot from './WarblerScreenshot.png';

class WorkPage extends Component {
  render() {
    return (
      <div className="pt-5">
        <div style={{ height: '100vh' }} className="pt-5" id="work">
          <div className="WorkPage text-center pt-5">
            <h1 className="HeaderText">Check out my work!</h1>
          </div>
          <div className="row pt-3">
            <div class="card mx-3" style={{ width: '18rem' }}>
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
            <div class="card mx-3" style={{ width: '18rem' }}>
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

            <div class="card mx-3" style={{ width: '18rem' }}>
              <a href="https://github.com/KatieJessupMcd/warbler">
                <img
                  class="card-img-top"
                  src={warblerScreenshot}
                  alt="warblerScreenshot"
                />
              </a>
              <div class="card-body">
                <p class="card-text">Warbler- Mock twitter application</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkPage;
