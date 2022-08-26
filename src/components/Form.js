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
    const { info, handleInputChange } = this.props;
    return (
      <form className="form" autoComplete="off">
        <General info={info} handleInputChange={handleInputChange} />
        <Experience info={info} handleInputChange={handleInputChange} />
        <Education info={info} handleInputChange={handleInputChange} />
        <Skills info={info} handleInputChange={handleInputChange} />
      </form>
    );
  }
}

export default Form;
