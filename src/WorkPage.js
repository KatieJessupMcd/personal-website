import React, { Component } from 'react';
import matchingScreenshot from './matchingScreenshot.png';
import joblyScreenshot from './JoblyScreenshot.png';
import warblerScreenshot from './WarblerScreenshot.png';

class WorkPage extends Component {
  render() {
    return (
      <div>
        <section
          style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          className="pt-5"
          id="work"
        >
          <div className="WorkPage text-center">
            <h1 className="HeaderText">Check out my work!</h1>
            <p>
              Click image for a live demo or take a look at my GitHub
              repo
            </p>
          </div>
          <div className="row mt-3">
            <div className="workCard col-lg-4 d-flex align-items-stretch">
              <div class="card workCard mx-3">
                <a href="https://katiejessupmcd.github.io/matching_game/">
                  <img
                    class="card-img-top"
                    src={matchingScreenshot}
                    alt="matchingScreenshot"
                  />
                </a>
                <div className="card-body text-center">
                  <h3 className="card-title">Matching Game </h3>
                  <p className="card-subtitle">JS | HTML | CSS </p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item text-center">
                    <a
                      href="https://github.com/KatieJessupMcd/matching_game"
                      className="card-link"
                    >
                      GitHub Repo{' '}
                      <i
                        className="fab fa-github-square fa-2x"
                        title="GitHub"
                        alt="github"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="workCard col-lg-4 d-flex align-items-stretch">
              <div class="card workCard mx-3">
                <a href="https://react-jobly-frontend-katieg.herokuapp.com/">
                  <img
                    class="card-img-top"
                    src={joblyScreenshot}
                    alt="joblyScreenshot"
                  />
                </a>
                <div className="card-body text-center">
                  <h3 className="card-title">Jobly</h3>
                  <p className="card-subtitle">React | Node | PostgreSQL</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item text-center">
                    <a
                      href="https://github.com/KatieJessupMcd/react-jobly"
                      className="card-link"
                    >
                      GitHub Repo{' '}
                      <i
                        className="fab fa-github-square fa-2x"
                        title="GitHub"
                        alt="github"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="workCard col-lg-4 d-flex align-items-stretch">
              <div class="card workCard mx-3">
                <a href="https://warbler-katieg.herokuapp.com/">
                  <img
                    class="card-img-top"
                    src={warblerScreenshot}
                    alt="warblerScreenshot"
                  />
                </a>
                <div className="card-body text-center">
                  <h3 className="card-title">Warbler</h3>
                  <p className="card-subtitle">Flask | Jinja | PostgreSQL</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item text-center">
                    <a
                      href="https://github.com/KatieJessupMcd/warbler"
                      className="card-link"
                    >
                      GitHub Repo{' '}
                      <i
                        className="fab fa-github-square fa-2x"
                        title="GitHub"
                        alt="github"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default WorkPage;
