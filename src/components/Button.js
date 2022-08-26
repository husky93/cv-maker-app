import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { text, className, handleClick } = this.props;
    const classes = `btn ${className}`;
    return (
      <button className={classes} onClick={handleClick}>
        {text}
      </button>
    );
  }
}

export default Button;
