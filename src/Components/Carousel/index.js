import React from 'react';
import './Carousel.css';

const Carousel = (props) => {
  return (
    <nav className="Carousel">
      left
      <h4>{props.genre.genre}</h4>
      <div className="scroll-container">
        
        {props.matchingGames.map(game => {
          return (
            <div className="carousel-game">
              <div className="game-card">
                <span>{game.game}</span>
                <img className="carousel-image" src={game.img}></img>
              </div>
              
            </div>
            )
        })}
        </div>
      right
    </nav>
  )
  }

export default Carousel;