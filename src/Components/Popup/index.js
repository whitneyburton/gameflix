import React, { Component } from 'react';
import './PopUp.css';

export default class PopUp extends Component {
  render() {
    let className = "PopUp";
    if (this.props.isSearch) {
      className = "search-popup"
    }
    return (
      <div className={className}>
        <i onClick={this.props.closePopUp} class="fas fa-times"></i>
        <h1>{this.props.game.game}</h1>
        <p>{this.props.game.description}</p>
        <img className="carousel-image" src={this.props.game.img} alt="" />
      </div>
    )
  }
}