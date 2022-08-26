import React, { Component } from 'react';
import Input from './Input';

class General extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="input-group form-general">
        <h2 className="group-heading">General Information</h2>
        <Input
          type="text"
          className="input--name"
          placeholder="Name"
          value="placeholder value"
          handleInputChange={() => {}}
        />
        <Input
          type="text"
          className="input--title"
          placeholder="Title"
          value="placeholder value"
          handleInputChange={() => {}}
        />
        <Input
          type="text"
          className="input--location"
          placeholder="Location"
          value="placeholder value"
          handleInputChange={() => {}}
        />
        <Input
          type="tel"
          className="input--phone"
          placeholder="Phone number"
          value="placeholder value"
          handleInputChange={() => {}}
        />
        <Input
          type="email"
          className="input--email"
          placeholder="E-mail address"
          value="placeholder value"
          handleInputChange={() => {}}
        />
        <Input
          type="url"
          className="input--website"
          placeholder="https://example.com"
          value="placeholder value"
          handleInputChange={() => {}}
        />
      </div>
    );
  }
}

export default General;
