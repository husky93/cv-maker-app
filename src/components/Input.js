import React from 'react';

const Input = (props) => {
  const {
    className,
    value,
    placeholder,
    type,
    name,
    index,
    handleInputChange,
  } = props;

  const classes = `input ${className}`;

  return (
    <label className="input-wrapper">
      <input
        className={classes}
        type={type}
        value={value}
        onChange={handleInputChange}
        data-name={name}
        data-index={index}
        placeholder=" "
      />
      <span className="placeholder">{placeholder}</span>
    </label>
  );
};

export default Input;
