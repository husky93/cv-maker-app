import React, { Component } from 'react';
import Education from './Education';
import Experience from './Experience';
import General from './General';

class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="form" autoComplete="off">
        <General />
        <Experience />
        <Education />
      </form>
    );
  }
}

export default Form;
