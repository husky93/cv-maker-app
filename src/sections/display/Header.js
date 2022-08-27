import React, { Component } from 'react';
import Heading from '../../components/Heading';
import Text from '../../components/Text';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { info } = this.props;
    return (
      <div className="display-header">
        <div className="header-top">
          <Heading tag="h1" className="display-name" text={info.name} />
          <Text tag="strong" className="display-title" text={info.title} />
        </div>
      </div>
    );
  }
}

export default Header;
