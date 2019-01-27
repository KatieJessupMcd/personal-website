import React, { Component } from 'react';
import ContactButtons from './ContactButtons';

class ContactPage extends Component {
  render() {
    return (
      <div className="ContactPage">
        <h1>This will be the Contact Page </h1>
        <ContactButtons />
      </div>
    );
  }
}

export default ContactPage;
