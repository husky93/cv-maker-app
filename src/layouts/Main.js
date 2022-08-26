import React, { Component } from 'react';
import Display from './Display';
import Form from './Form';

class Main extends Component {
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
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const key = event.target.dataset.name;
    const value = event.target.value;
    this.setState({
      form: {
        ...this.state.form,
        [key]: value,
      },
    });
  }

  render() {
    return (
      <main className="main">
        <Form
          info={this.state.form}
          handleInputChange={this.handleInputChange}
        />
        <Display />
      </main>
    );
  }
}

export default Main;
