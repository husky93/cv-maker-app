import React from 'react';

const Button = (props) => {
  const { text, className, handleClick } = props;
  const classes = `btn ${className}`;

  return (
    <button className={classes} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
