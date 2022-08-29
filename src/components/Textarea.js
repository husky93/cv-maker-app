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
  }
}

export default Textarea;
