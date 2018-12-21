import React, { Component } from 'react';
import './PopUp.css';

export default class PopUp extends Component {
  render() {
    let className="PopUp";
    if(this.props.isSearch) {
      className="search-popup"
    }
    return (
      <div className={className}>
      <i onClick={this.props.closePopUp} class="fas fa-times"></i>
      {this.props.game.game}
      </div>
    )
  }
}