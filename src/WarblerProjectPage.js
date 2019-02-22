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
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <img
                className="screenshot"
                src={warblerScreenshot}
                alt="warblerScreenshot"
              />
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <div className="row">
                <h4 className="col-12">
                  <strong>Warbler</strong> is a mock Twitter clone. Users can
                  signup/login, follow other others, be followed by other users,
                  and create "warbles" (tweets). BCrypt is used for user
                  authentication/ authorization. Sessions are used to store
                  current user information. The backend is built in Flask. The
                  templating system Jinja is used for HTML. The database is
                  PostrgreSQL. Tests are written for the views and models using
                  the unittest module.
                </h4>

                <div className="col-12">
                  <span>
                    <a
                      href="https://warbler-katieg.herokuapp.com/"
                      className="card-link"
                    >
                      Live Site
                    </a>
                  </span>{' '}
                  |{' '}
                  <span>
                    <a
                      href="https://github.com/KatieJessupMcd/warbler"
                      className="card-link"
                    >
                      GitHub Repo{' '}
                      <i
                        className="fab fa-github-square fa-1x"
                        title="GitHub"
                        alt="github"
                      />
                    </a>
                  </span>
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
