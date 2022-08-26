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
    console.log(this.state);
  }

  render() {
    return (
      <div className="app">
        <Form
          info={this.state.form}
          handleInputChange={this.handleInputChange}
        />
        <Display />
      </div>
    );
  }
}

export default App;
