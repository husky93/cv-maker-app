import React, { Component } from 'react';
import Header from '../sections/display/Header';
import Expertise from '../sections/display/Expertise';
import Info from '../sections/display/Info';
import '../assets/styles/Display.css';

class Display extends Component {
  render() {
    const { info } = this.props;
    return (
      <div className="display">
        <Header info={info} />
        <Expertise info={info} />
        <Info info={info} />
      </div>
    );
  }
}

export default Display;
