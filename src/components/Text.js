import React from 'react';

const Text = (props) => {
  const { className, tag, text } = props;

  const classes = `text ${className}`;
  const CustomTag = tag;

  return <CustomTag className={classes}>{text}</CustomTag>;
};

export default Text;
