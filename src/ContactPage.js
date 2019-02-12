import React, { Component } from 'react';
import ContactButtons from './ContactButtons';

class ContactPage extends Component {
  render() {
    return (
      <div className="ContactPage col d-flex align-items-center justify-content-center">
        <div className="row pt-5">
          <div className="ContactMessage text-center" />
          <h1>Get in touch! </h1>
        </div>
        <div className="row pt-5">
          <ContactButtons />
        </div>
      </div>
    );
  }
}

export default ContactPage;
