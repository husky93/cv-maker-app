import React, { Component } from 'react';
import Input from './Input';

class General extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="input-group form-general">
        <Input
          type="text"
          className="input--name"
          placeholder="Name"
          value="placeholder value"
          handleInputChange={() => {}}
        />
      </div>
    );
  }
}

export default General;
