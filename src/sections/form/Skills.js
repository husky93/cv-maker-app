import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Skills = (props) => {
  const { info, handleInputChange, handleSkillAdd, handleSkillDelete } = props;

  return (
    <div className="form-skills">
      <h2 className="group-heading">Skills</h2>
      {info.skills.map((value, index) => (
        <div className="skills-group" data-id={index} key={`skills${index}`}>
          <Input
            type="text"
            className="input--skills"
            placeholder="Skill"
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
};

export default Skills;
