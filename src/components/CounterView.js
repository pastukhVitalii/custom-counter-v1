import React from 'react';
import './Counter.css';
import Value from "./Value/Value";
import Button from "./Button/Button";

class CounterView extends React.Component {

  render() {
    return (
      <div className="counter">
        <div className="counter-header">
          <Value state={this.props.state}/>
        </div>
        <div className="counter-footer">
          <Button onClickFunc={this.props.addCount}
                  title={'inc'}
                  disabled={this.props.state.count === this.props.state.maxValue || this.props.state.setValue === false}/>
          <Button onClickFunc={this.props.resetCount}
                  title={'reset'}
                  disabled={this.props.state.count < 1 || this.props.state.setValue === false}/>
          <Button onClickFunc={this.props.showSetings}
                  title={'setings'} />
        </div>
      </div>
    );
  }
}

export default CounterView;
