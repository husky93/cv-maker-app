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
    const {
      info,
      handleInputChange,
      handleExperienceChange,
      handleExperienceAdd,
      handleExperienceDelete,
    } = this.props;
    return (
      <form className="form" autoComplete="off">
        <General info={info} handleInputChange={handleInputChange} />
        <Experience
          info={info}
          handleInputChange={handleExperienceChange}
          handleExperienceAdd={handleExperienceAdd}
          handleExperienceDelete={handleExperienceDelete}
        />
        <Education info={info} handleInputChange={handleInputChange} />
        <Skills info={info} handleInputChange={handleInputChange} />
      </form>
    );
  }
}

export default Form;
