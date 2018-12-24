import React, { Component } from 'react';
import GameCard from './GameCard';
import { uid } from 'react-uid';

class Carousel extends Component {
  render() {
    const { genre, matchingGames, createPopUp, children } = this.props;
    return (
      <nav className="Carousel" data-genre={genre.genre}>
        <h4 className="genre">{genre.genre}</h4>

        <i className="fas fa-angle-left"></i>

        <div className="scroll-container">
          {matchingGames.map(game => {
            return (
              <GameCard
                key={uid(game)}
                game={game}
                createPopUp={createPopUp} />
            )
          })}
        </div>

        <i className="fas fa-angle-right"></i>
        {children}
      </nav>
    )
  }
}

export default Carousel;