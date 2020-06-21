import React from 'react';

class Value extends React.Component {

  render() {
    let num = <span className={this.props.state.count === this.props.state.maxValue? 'red': ''}>
      {this.props.state.count}</span>;
    let error = this.props.state.minValue < 0 || this.props.state.maxValue < 0 || this.props.state.minValue === this.props.state.maxValue || this.props.state.minValue > this.props.state.maxValue ?
      <span className='red'>Incorrect value!</span>: <span>Enter values and press "set"</span>;
    return (
      <div className="value">
        {this.props.state.setValue? num: error}
      </div>
    );
  }
}
  export default Value;
