import React, { Component } from 'react';

class Info extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { info } = this.props;
    return <div className="display-info"></div>;
  }
}

export default Info;
