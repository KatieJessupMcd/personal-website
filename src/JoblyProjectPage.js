import React, { Component } from 'react';
import joblyScreenshot from './JoblyScreenshot.png';
// import './ProjectPage.css';

class JoblyProjectPage extends Component {
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
          <div className="row ProjectPage text-center mx-auto">
            <h1 className="HeaderText col-xs-12 col-sm-12 col-md-12 col-lg-12">
              Check out my work!
            </h1>
          </div>
          <div className="row pt-5">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <img
                className="screenshot"
                src={joblyScreenshot}
                alt="joblyScreenshot"
              />
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <div className="row">
                <h3 className="col-12">
                  <strong>Jobly</strong> is a mock job listing and app that allows users to view
                  companies as well as apply to jobs posted by those companies.
                  JSON web tokens and BCrypt was used for authorization and
                  authentication for user signup and login. The frontend is
                  built in React, and the backend is built in Node.js/Express.
                  The database is written in PostgreSQL. Styling is done with
                  Bootstrap.
                </h3>
                
                  <h4 className="col-12">
                    <a href="https://react-jobly-frontend-katieg.herokuapp.com/">
                      {' '}
                      Live Site
                    </a>{' '}
                    |{' '}
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
                  </h4>
                </div>
              </div>
            </div>
         
        </section>
      </div>
    );
  }
}

export default JoblyProjectPage;
