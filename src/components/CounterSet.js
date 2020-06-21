import React from 'react';
import './Counter.css';
import Input from "./Input/Input";
import Button from "./Button/Button";

class CounterSet extends React.Component {
  render() {
    // let inputClass = this.props.state.minValue === this.props.state.maxValue || this.props.state.minValue > this.props.state.maxValue? 'error': '';
    let inputClass = this.props.state.minValue < this.props.state.maxValue? '': 'error';
    return (
      <div className="counter">
        <div className={`${inputClass} counter-header`}>
          <Input label={'max value:'}
                 value={this.props.state.maxValue}
                 onInputChanged={this.props.onInputChangedMax} />
          <Input label={'min value:'}
                 value={this.props.state.minValue}
                 onInputChanged={this.props.onInputChangedMin}/>
        </div>
        <div className="counter-footer">
          <Button title={'set'}
                  onClickFunc={this.props.setCount}
                  disabled={this.props.state.minValue < 0 || this.props.state.maxValue < 1 || this.props.state.minValue === this.props.state.maxValue || this.props.state.minValue > this.props.state.maxValue}/>
        </div>
      </div>
    );
  }
}

  export default CounterSet;
