import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Courses = (props) => {
  const { info, handleInputChange, addCourse, deleteCourse } = props;

  return (
    <div className="form-courses">
      <h2 className="group-heading">Courses</h2>
      {info.courses.map((item, index) => (
        <div
          className="input-group courses-wrapper"
          key={`courses${index}`}
          data-id={index}
        >
          <div
            className="courses-group-container courses-input-wrapper"
            data-id={index}
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
          </div>
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
};

export default Courses;
