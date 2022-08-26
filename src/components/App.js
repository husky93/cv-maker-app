import React, { Component } from 'react';
import Display from './Display';
import Form from './Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        name: 'John Doe',
        title: 'JavaScript Developer',
        location: 'Kraków, PL',
        phone: '1235678995',
        email: 'example@google.com',
        website: 'https://example.com',
      },
    };
  }

  render() {
    return (
      <div className="app">
        <Form info={this.state.form} />
        <Display />
      </div>
    );
  }
}

export default App;
