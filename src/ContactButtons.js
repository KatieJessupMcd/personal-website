import React, { Component } from 'react';

class ContactButtons extends Component {
  render() {
    return (
      <div>
        <div
          className="footer"
          style={{ position: 'fixed', left: '1rem', bottom: '1rem' }}
        >
          <div className="contact py-1" >
            <i>
              <a
                href="https://github.com/KatieJessupMcd"
                className="fab fa-github-square fa-4x"
                title="GitHub"
                alt="github"
              />
            </i>
          </div>
          <div className="contact py-1">
            <i>
              <a
                href="https://angel.co/katie-m-gray"
                className="fab fa-angellist fa-4x"
                title="AngelList"
              />
            </i>
          </div>
          <div className="contact py-1">
            <i>
              <a
                href="https://www.linkedin.com/in/katie-gray-458709b5"
                className="fab fa-linkedin fa-4x"
                title="LinkedIn"
              />
            </i>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactButtons;
