import React from 'react';

class Button extends React.Component {

  render() {
    return (
      <div className="buttons">
        <button onClick={this.props.onClickFunc}
                disabled={this.props.disabled}>{this.props.title}</button>
      </div>
    );
  }
}

  export default Button;
