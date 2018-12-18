import React from 'react';
import './Carousel.css';

const Carousel = (props) => {

  return (
    <nav className="Carousel">
      left
      <div className="scroll-container">
      <div className="carousel-game">
        <span>{props.data.games[0].game}</span>
      </div>
      <div className="carousel-game">
        <span>{props.data.games[1].game}</span>
      </div>
      <div className="carousel-game">
        <span>{props.data.games[2].game}</span>
      </div>
      <div className="carousel-game">
        <span>{props.data.games[3].game}</span>
      </div>
      <div className="carousel-game">
        <span>{props.data.games[4].game}</span>
      </div>
      <div className="carousel-game">
        <span>{props.data.games[0].game}</span>
      </div>
      <div className="carousel-game">
        <span>{props.data.games[0].game}</span>
      </div>
      <div className="carousel-game">
        <span>{props.data.games[0].game}</span>
        </div>
        </div>
      right
    </nav>
  )
  }

export default Carousel;