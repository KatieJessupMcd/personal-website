import React, { Component } from 'react';
import matchingScreenshot from './matchingScreenshot.png';
import joblyScreenshot from './JoblyScreenshot.png';
import warblerScreenshot from './WarblerScreenshot.png';

class WorkPage extends Component {
  render() {
    return (
      <div className="pt-5">
        <div style={{ height: '100vh' }} className="pt-5" id="work">
          <div className="WorkPage text-center pt-5">
            <h1 className="HeaderText">Check out my work!</h1>
            <p>Click on the thumbnail for a live demo or take a look at my GitHub repo</p>
          </div>
          <div className="row mt-3">
            <div className="workCard col-lg-4 d-flex align-items-stretch">
              <a href="https://katiejessupmcd.github.io/matching_game/">
                <div
                  class="card workCard mx-3"
                >
                  <img
                    class="card-img-top"
                    src={matchingScreenshot}
                    alt="matchingScreenshot"
                  />
                  <div class="card-body text-center">
                    <p class="card-text">Matching Game </p>
                    <p class="card-text">JS | HTML | CSS </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="workCard col-lg-4 d-flex align-items-stretch">
              <a href="https://react-jobly-frontend-katieg.herokuapp.com/">
                <div
                  class="card workCard mx-3"
                >
                  <img
                    class="card-img-top"
                    src={joblyScreenshot}
                    alt="joblyScreenshot"
                  />
                  <div class="card-body text-center">
                    <p class="card-text">Jobly</p>
                    <p class="card-text">React | Node.js | PostgreSQL </p>
                  </div>
                </div>
              </a>
            </div>

            <div class="workCard col-lg-4 d-flex align-items-stretch">
              <a href="https://warbler-katieg.herokuapp.com/">
                <div
                  class="card workCard mx-3"
                >
                  <img
                    class="card-img-top img-responsive"
                    src={warblerScreenshot}
                    alt="warblerScreenshot"
                  />
                  <div class="card-body text-center">
                    <p class="card-text">Warbler</p>
                    <p class="card-text">Flask | Jinja | PostgreSQL </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="row pt-3">
            <div className="cardLabel col-lg-4 text-center">
              <p>
                <a href="https://github.com/KatieJessupMcd/matching_game">
                  GitHub Repo
                </a>
              </p>
            </div>
            <div className="cardLabel col-lg-4 text-center">
              <p>
                <a href="https://github.com/KatieJessupMcd/react-jobly">
                  GitHub Repo
                </a>
              </p>
            </div>
            <div className="cardLabel col-lg-4 text-center">
              <p>
                <a href="https://github.com/KatieJessupMcd/warbler">
                  GitHub Repo
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkPage;
