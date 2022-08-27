import React, { Component } from 'react';
import Heading from '../../components/Heading';

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { info } = this.props;
    return <div className="display-sidebar"></div>;
  }
}

export default Sidebar;
