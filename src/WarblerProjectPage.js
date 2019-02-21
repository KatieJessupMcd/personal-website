import React, { Component } from 'react';
import warblerScreenshot from './WarblerScreenshot.png';
// import './ProjectPage.css';

class WarblerProjectPage extends Component {
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
          {/* <div className="row ProjectPage text-center mx-auto">
            <h1 className="HeaderText col-xs-12 col-sm-12 col-md-12 col-lg-12">
              Check out my work!
            </h1>
            <p className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              Click image for a live demo or take a look at my GitHub repo
            </p>
          </div> */}
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <img
                className="card-img-top"
                src={warblerScreenshot}
                alt="warblerScreenshot"
              />
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <div className="row">
                <h3 className="col-12">
                  Warler is a mock twitter clone. Users can signup/login, follow
                  other others, be followed by other users, and create "warbles"
                  (tweets). BCrypt is used for user authentication/
                  authorization. Sessions are used to store current user
                  information. The backend is built in Flask. The templating
                  system Jinja is used for HTML. The database is PostrgreSQL.
                  Tests are written for the views and models using the unittest
                  module.
                </h3>
                <div className="row">
                  <h4 className="col-12">
                    <a href="https://warbler-katieg.herokuapp.com/">
                      {' '}
                      Live Site
                    </a>{' '}
                    |{' '}
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
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default WarblerProjectPage;
