import React from 'react';
import EduForm from '../../components/EduFrom';
import Button from '../../components/Button';

const Education = (props) => {
  const { info, handleInputChange, handleEducationAdd, handleEducationDelete } =
    props;

  return (
    <div className="form-education">
      <h2 className="group-heading">Education</h2>
      {info.education.map((item, index) => (
        <EduForm
          id={index}
          info={item}
          handleInputChange={handleInputChange}
          handleFormDelete={handleEducationDelete}
          key={`eduform-${index}`}
        />
      ))}
      <div className="experience-ui">
        <Button
          text="Add"
          handleClick={handleEducationAdd}
          className="btn--primary edu-add"
        />
      </div>
    </div>
  );
};

export default Education;
