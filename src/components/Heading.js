import React from 'react';

const Heading = (props) => {
  const { className, tag, text } = props;

  const classes = `heading ${className}`;
  const CustomTag = tag;

  return <CustomTag className={classes}>{text}</CustomTag>;
};

export default Heading;
