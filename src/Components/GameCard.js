import React, { Component } from 'react'

export default class extends Component {

  render() {
    const { game, createPopUp } = this.props;

    return (
      <div key={game.game} className="carousel-game">
        <div className="game-card" onClick={createPopUp}>
          <div className="game-card-header-container">
            <div className="game-card-header-title-container">
              <span className="game-card-header">{game.game}</span>
            </div>
          </div>
          <img className="game-card-image" src={game.img} alt="game board" />
        </div>
      </div>
    )
  }
}