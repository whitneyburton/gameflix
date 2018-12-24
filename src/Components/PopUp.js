import React, { Component } from 'react';

export default class PopUp extends Component {
  render() {
    const { isSearch, game, closePopUp } = this.props;
    let className = "PopUp";

    if (isSearch) {
      className = "search-popup"
    }

    return (
      <div className={className}>]
        <i onClick={closePopUp} className="fas fa-times"></i>
        <h1>{game.game}</h1>
        <p>{game.description}</p>
        <img className="carousel-image" src={game.img} alt="" />
      </div>
    )
  }
}