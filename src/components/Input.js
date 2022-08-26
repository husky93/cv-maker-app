import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { className, value, placeholder, type, name, handleInputChange } =
      this.props;
    const classes = `input ${className}`;
    return (
      <input
        className={classes}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
        data-name={name}
      />
    );
  }
}

export default Input;
