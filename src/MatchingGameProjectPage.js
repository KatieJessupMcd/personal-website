import React, { Component } from 'react';
import matchingScreenshot from './matchingScreenshot.png';
// import './ProjectPage.css';

class MatchingGameProjectPage extends Component {
  static defaultProps = {};
  render() {
    return (
      <div className="col-xs-12">
        <section
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          className="pt-5"
          id="work"
        >
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <img
                className="screenshot"
                src={matchingScreenshot}
                alt="matchingScreenshot"
              />
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <div className="row">
                <h3 className="col-12">
                  A basic matching game built with HTML, CSS and JavaScript.
                </h3>

                <h4 className="col-12">
                  <a href="https://katiejessupmcd.github.io/matching_game/">
                    {' '}
                    Live Site
                  </a>{' '}
                  |{' '}
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
                </h4>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default MatchingGameProjectPage;
