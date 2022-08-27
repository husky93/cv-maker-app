import React, { Component } from 'react';

class Text extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { className, tag, text } = this.props;

    const classes = `text ${className}`;
    const CustomTag = tag;

    return <CustomTag className={classes}>{text}</CustomTag>;
  }
}

export default Text;
