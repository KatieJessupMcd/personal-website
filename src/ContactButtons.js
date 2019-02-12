import React, { Component } from 'react';

class ContactButtons extends Component {
  render() {
    return (
      <div>
        <div className="row py-5">
          <div className="contact col-sm-4 text-center">
            <i>
              <a
                href="https://github.com/KatieJessupMcd"
                className="fab fa-github-square fa-4x"
                title="GitHub"
                alt="github"
              />
            </i>
          </div>
          <div className="contact col-sm-4 text-center">
            <i>
              <a
                href="https://www.linkedin.com/in/katie-gray-458709b5"
                className="fab fa-linkedin fa-4x"
                
                title="LinkedIn"
              />
            </i>
          </div>
          <div className="contact col-sm-4 text-center">
            <i>
              <a
                href="https://angel.co/katie-m-gray"
                className="fab fa-angellist fa-4x"
                
                title="AngelList"
              />
            </i>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactButtons;
