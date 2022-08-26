import React, { Component } from 'react';
import Display from './Display';
import Form from './Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      form: {},
    };
  }

  render() {
    return (
      <div className="app">
        <Form />
        <Display />
      </div>
    );
  }
}

export default App;
