import React, { Component } from 'react';
import ExpForm from '../components/ExpForm';

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { info, handleInputChange } = this.props;
    return (
      <div className="input-group form-experience">
        <h2 className="group-heading">Experience</h2>
        <ExpForm
          id="0"
          info={info.experience[0]}
          handleInputChange={handleInputChange}
        />
      </div>
    );
  }
}

export default Experience;
