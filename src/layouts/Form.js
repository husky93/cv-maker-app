import React, { Component } from 'react';
import Education from '../sections/Education';
import Experience from '../sections/Experience';
import General from '../sections/General';
import Skills from '../sections/Skills';

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
