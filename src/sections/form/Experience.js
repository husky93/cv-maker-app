import React from 'react';
import Button from '../../components/Button';
import ExpForm from '../../components/ExpForm';

const Experience = (props) => {
  const {
    info,
    handleInputChange,
    handleExperienceAdd,
    handleExperienceDelete,
  } = props;

  return (
    <div className="form-experience">
      <h2 className="group-heading">Experience</h2>
      {info.experience.map((item, index) => (
        <ExpForm
          id={index}
          info={item}
          handleInputChange={handleInputChange}
          handleFormDelete={handleExperienceDelete}
          key={`expform-${index}`}
        />
      ))}
      <div className="experience-ui">
        <Button
          text="Add"
          handleClick={handleExperienceAdd}
          className="btn--primary exp-add"
        />
      </div>
    </div>
  );
};

export default Experience;
