import React, { Component } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';

class Courses extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { info, handleInputChange, addCourse, deleteCourse } = this.props;

    return (
      <div className="input-group form-courses">
        <h2 className="group-heading">Courses</h2>
        {info.courses.map((item, index) => (
          <div
            className="input-group courses-group"
            data-id={index}
            key={`courses${index}`}
          >
            <Input
              type="text"
              name="name"
              className="input--name"
              placeholder="Course name"
              index={index}
              value={item.name}
              handleInputChange={handleInputChange}
            />
            <Input
              type="text"
              name="description"
              className="input--description"
              placeholder="Course description"
              index={index}
              value={item.description}
              handleInputChange={handleInputChange}
            />
            <Button
              text="Delete"
              className="btn--danger courses-delete"
              handleClick={deleteCourse}
            />
          </div>
        ))}
        <Button
          text="Add"
          className="btn--primary courses-add"
          handleClick={addCourse}
        />
      </div>
    );
  }
}

export default Courses;
