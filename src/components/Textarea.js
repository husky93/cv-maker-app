import React from 'react';

const Textarea = (props) => {
  const { className, value, placeholder, name, handleInputChange } = props;
  const classes = `textarea ${className}`;

  return (
    <label className="textarea-wrapper">
      <textarea
        className={classes}
        value={value}
        placeholder=" "
        onChange={handleInputChange}
        data-name={name}
      />
      <span className="placeholder">{placeholder}</span>
    </label>
  );
};

export default Textarea;
