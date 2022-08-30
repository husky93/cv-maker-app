import React from 'react';
import Text from './Text';

const IconGroup = (props) => {
  const { text, children } = props;

  return (
    <div className="icon-group">
      {children}
      <Text className="icon-group-text" tag="span" text={text} />
    </div>
  );
};

export default IconGroup;
