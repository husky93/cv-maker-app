import React, { Component } from 'react';
import Education from './Education';
import Experience from './Experience';
import General from './General';
import Skills from './Skills';

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
        <Skills />
      </form>
    );
  }
}

export default Form;
