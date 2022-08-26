import React, { Component } from 'react';
import Button from '../components/Button';
import ExpForm from '../components/ExpForm';

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { info, handleInputChange, handleExperienceAdd } = this.props;
    return (
      <div className="input-group form-experience">
        <h2 className="group-heading">Experience</h2>
        {info.experience.map((item, index) => (
          <ExpForm
            id={index}
            info={item}
            handleInputChange={handleInputChange}
            key={`expform-${index}`}
          />
        ))}
        <div className="experience-ui">
          <Button
            text="Add"
            handleClick={handleExperienceAdd}
            className="btn--primary"
          />
        </div>
      </div>
    );
  }
}

export default Experience;
