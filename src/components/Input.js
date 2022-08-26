import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { className, value, placeholder, type, handleInputChange } =
      this.props;
    const classes = `input ${className}`;
    return (
      <input
        className={classes}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    );
  }
}

export default Input;
