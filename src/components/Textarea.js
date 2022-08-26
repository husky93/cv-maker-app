import React, { Component } from 'react';

class Textarea extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { className, value, placeholder, name, handleInputChange } =
      this.props;
    const classes = `textarea ${className}`;
    return (
      <textarea
        className={classes}
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
        data-name={name}
      />
    );
  }
}

export default Textarea;
