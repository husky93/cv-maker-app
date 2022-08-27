import React, { Component } from 'react';
import Button from './Button';
import Input from './Input';
import Textarea from './Textarea';

class EduForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { info, id, handleInputChange, handleFormDelete } = this.props;
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
          placeholder="Description..."
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
  }
}

export default EduForm;
