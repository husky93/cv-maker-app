import React, { Component } from 'react';

class Heading extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { className, tag, text } = this.props;

    const classes = `heading ${className}`;
    const CustomTag = tag;

    return <CustomTag className={classes}>{text}</CustomTag>;
  }
}

export default Heading;
