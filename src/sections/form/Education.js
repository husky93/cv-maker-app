import React, { Component } from 'react';
import EduForm from '../../components/EduFrom';
import Button from '../../components/Button';

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      info,
      handleInputChange,
      handleEducationAdd,
      handleEducationDelete,
    } = this.props;
    return (
      <div className="input-group form-education">
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
  }
}

export default Education;
