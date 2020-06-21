import React from 'react';

class Input extends React.Component {

  render() {
    return (
      <div className="input">
        <label> {this.props.label} </label>
        <input type="number"
               value={this.props.value}
               onChange={this.props.onInputChanged}/>
      </div>
    );
  }
}
  export default Input;
