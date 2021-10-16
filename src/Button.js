import React from 'react';

class Button extends React.Component {
  render() {
    return <button onClick={this.props.fun}>{this.props.text}</button>;
  }
}
 
export default Button;