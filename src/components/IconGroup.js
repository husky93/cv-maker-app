import React, { Component } from 'react';
import Text from './Text';

class IconGroup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { text, children } = this.props;
    return (
      <div className="icon-group">
        {children}
        <Text className="icon-group-text" tag="span" text={text} />
      </div>
    );
  }
}

export default IconGroup;
