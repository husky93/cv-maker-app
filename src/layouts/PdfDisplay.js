import React from 'react';
import ReactToPrint from 'react-to-print';
import Display from './Display';

class PdfDisplay extends React.Component {
  render() {
    return (
      <div className="pdf-display">
        <Display
          ref={(response) => (this.componentRef = response)}
          info={this.props.info}
        />
        <ReactToPrint
          content={() => this.componentRef}
          trigger={() => (
            <button className="btn btn--primary btn--print">
              Save as PDF!
            </button>
          )}
        />
      </div>
    );
  }
}

export default PdfDisplay;
