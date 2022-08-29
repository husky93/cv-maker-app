import React, { Component } from 'react';
import Button from './Button';
import Input from './Input';
import Textarea from './Textarea';

class ExpForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { info, id, handleInputChange, handleFormDelete } = this.props;
    return (
      <div className="input-group form-experience" data-id={id}>
        <Input
          type="text"
          name="company"
          className="input--company"
          placeholder="Company"
          value={info.company}
          handleInputChange={handleInputChange}
        />
        <Input
          type="text"
          name="title"
          className="input--title"
          placeholder="Title"
          value={info.title}
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
          className="btn--danger exp-delete"
        />
      </div>
    );
  }
}

export default ExpForm;
