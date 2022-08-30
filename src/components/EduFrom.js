import React from 'react';
import Button from './Button';
import Input from './Input';
import Textarea from './Textarea';

const EduForm = (props) => {
  const { info, id, handleInputChange, handleFormDelete } = props;

  return (
    <div className="input-group form-education" data-id={id}>
      <Input
        type="text"
        name="school"
        className="input--school"
        placeholder="School"
        value={info.school}
        handleInputChange={handleInputChange}
      />
      <Input
        type="text"
        name="degree"
        className="input--degree"
        placeholder="Degree"
        value={info.degree}
        handleInputChange={handleInputChange}
      />
      <Input
        type="text"
        name="date"
        className="input--date"
        placeholder="Date from - Date to"
        value={info.date}
        handleInputChange={handleInputChange}
      />
      <Input
        type="text"
        name="location"
        className="input--location"
        placeholder="Location"
        value={info.location}
        handleInputChange={handleInputChange}
      />
      <Textarea
        name="description"
        className="input--description"
        placeholder="Description"
        value={info.description}
        handleInputChange={handleInputChange}
      />
      <Button
        text="Delete"
        handleClick={handleFormDelete}
        className="btn--danger edu-delete"
      />
    </div>
  );
};

export default EduForm;
