import React, { Component } from 'react'

export default class extends Component {
  
  render() {
    const { game, createPopUp } = this.props;
    
    return (
      <div key={game.game} className="carousel-game">
        <div className="game-card" onClick={createPopUp}>
          <span className="game-card-header">{game.game}</span>
          <img className="carousel-image" src={game.img} alt="game board"/>
        </div>
      </div>
    )
  }
}