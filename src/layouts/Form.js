import React from 'react';
import Courses from '../sections/form/Courses';
import Education from '../sections/form/Education';
import Experience from '../sections/form/Experience';
import General from '../sections/form/General';
import Skills from '../sections/form/Skills';
import '../assets/styles/Form.css';

const Form = (props) => {
  const {
    info,
    handleInputChange,
    handleInfoChange,
    handleAddClick,
    handleDeleteClick,
    handleSkillsInputChange,
  } = props;

  return (
    <form className="form" autoComplete="off">
      <General info={info} handleInputChange={handleInputChange} />
      <Skills
        info={info}
        handleInputChange={handleSkillsInputChange}
        handleSkillDelete={handleDeleteClick}
        handleSkillAdd={handleAddClick}
      />
      <Experience
        info={info}
        handleInputChange={handleInfoChange}
        handleExperienceAdd={handleAddClick}
        handleExperienceDelete={handleDeleteClick}
      />
      <Courses
        info={info}
        handleInputChange={handleInfoChange}
        addCourse={handleAddClick}
        deleteCourse={handleDeleteClick}
      />
      <Education
        info={info}
        handleInputChange={handleInfoChange}
        handleEducationAdd={handleAddClick}
        handleEducationDelete={handleDeleteClick}
      />
    </form>
  );
};

export default Form;
