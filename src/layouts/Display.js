import React, { Component } from 'react';
import Header from '../sections/display/Header';
import Sidebar from '../sections/display/Sidebar';
import Info from '../sections/display/Info';
import '../styles/Display.css';

class Display extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="display">
        <Header />
        <Sidebar />
        <Info />
      </div>
    );
  }
}

export default Display;
