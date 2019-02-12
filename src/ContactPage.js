import React, { Component } from 'react';
import ContactButtons from './ContactButtons';

class ContactPage extends Component {
  render() {
    return (
      <div>
        <div className="row py-5">
          <div className="ContactMessage col d-flex align-items-center justify-content-center">
            <h1>Like what you see? Get in touch!</h1>
          </div>
        </div>
        <div className="ContactButtons row">
          <div className="ContactButtons col d-flex align-items-center justify-content-center">
            <ContactButtons />
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPage;
