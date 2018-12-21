import React, { Component } from 'react';
import './PopUp.css';

class PopUp extends Component{
  render() {
    let className="PopUp";
    if(this.props.isSearch) {
      className="search-popup"
    }
    return (
      <div className={className}>
      {this.props.game.game}
      </div>
    )
  }
}

export default PopUp;


