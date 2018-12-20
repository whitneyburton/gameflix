import React, { Component } from 'react';
import './PopUp.css';

class PopUp extends Component{
  render() {
    return (
      <div className="PopUp">
      {this.props.game.game}
      </div>
    )
  }
}

export default PopUp;


