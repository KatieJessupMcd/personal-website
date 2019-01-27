import React, { Component } from 'react';

class ContactButtons extends Component {
  render() {
    return (
      <div className="container">
        <div className="ContactButtons row">
          <div className="GitHubBtn">
            <h2 className="dark">
              <a
                href="https://github.com/KatieJessupMcd"
                className="fab fa-github-square"
                title="GitHub"
              />
            </h2>
          </div>
          <div className="LinkedInBtn">
            <h2 className="dark">
              <a
                href="https://www.linkedin.com/in/katie-gray-458709b5"
                className="fab fa-linkedin"
                title="LinkedIn"
              />
            </h2>
          </div>
          <div className="AngelListBtn">
            <h2 className="dark">
              <a
                href="https://angel.co/katie-m-gray"
                className="fab fa-angellist"
                title="AngelList"
              />
            </h2>
          </div>
          <div className="ResumeBtn" />
        </div>
      </div>
    );
  }
}

export default ContactButtons;
