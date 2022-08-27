import React, { Component } from 'react';
import Education from '../sections/form/Education';
import Experience from '../sections/form/Experience';
import General from '../sections/form/General';
import Skills from '../sections/form/Skills';
import '../assets/styles/Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      info,
      handleInputChange,
      handleInfoChange,
      handleAddClick,
      handleDeleteClick,
      handleSkillsInputChange,
    } = this.props;
    return (
      <form className="form" autoComplete="off">
        <General info={info} handleInputChange={handleInputChange} />
        <Experience
          info={info}
          handleInputChange={handleInfoChange}
          handleExperienceAdd={handleAddClick}
          handleExperienceDelete={handleDeleteClick}
        />
        <Education
          info={info}
          handleInputChange={handleInfoChange}
          handleEducationAdd={handleAddClick}
          handleEducationDelete={handleDeleteClick}
        />
        <Skills
          info={info}
          handleInputChange={handleSkillsInputChange}
          handleSkillDelete={handleDeleteClick}
          handleSkillAdd={handleAddClick}
        />
      </form>
    );
  }
}

export default Form;
