import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      className,
      value,
      placeholder,
      type,
      name,
      index,
      handleInputChange,
    } = this.props;

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
  }
}

export default Input;
