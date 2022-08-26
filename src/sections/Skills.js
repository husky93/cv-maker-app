import React, { Component } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

class Skills extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { info, handleInputChange, handleSkillAdd, handleSkillDelete } =
      this.props;

    return (
      <div className="input-group form-skills">
        <h2 className="group-heading">Skills</h2>
        {info.skills.map((value, index) => (
          <div className="skills-group" data-id={index}>
            <Input
              type="text"
              className="input--skills"
              placeholder="..."
              key={`skills${index}`}
              index={index}
              value={value}
              handleInputChange={handleInputChange}
            />
            <Button
              text="Delete"
              className="btn--danger skills-delete"
              handleClick={handleSkillDelete}
            />
          </div>
        ))}
        <Button
          text="Add"
          className="btn--primary skills-add"
          handleClick={handleSkillAdd}
        />
      </div>
    );
  }
}

export default Skills;
