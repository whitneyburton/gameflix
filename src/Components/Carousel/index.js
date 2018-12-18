import React from 'react';
import './Carousel.css';

const Carousel = (props) => {
  return (
    <nav className="Carousel">
      left
      <div className="scroll-container">
      <div className="carousel-game">
        <h4>{props.genre.genre}</h4>
        <span>{props.matchingGames[0].game}</span>
      </div>
        </div>
      right
    </nav>
  )
  }

export default Carousel;