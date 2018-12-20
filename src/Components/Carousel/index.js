import React, { Component } from 'react';
import './Carousel.css';
import PopUp from '../PopUp'

class Carousel extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <nav className="Carousel">
        <h4 className="genre-name">{this.props.genre.genre}</h4>
        <div className="carousel-bar">
          <div>left</div>
          <div className="scroll-container">

            {this.props.matchingGames.map(game => {
              return (
                <div className="carousel-game">
                  <div onClick={(event) => this.props.createPopUp(event, this.props.genre.genreID)} className="game-card">
                    <span>{game.game}</span>
                    <img className="carousel-image" src={game.img}></img>
                  </div>
                </div>
              )
            })}
          </div>
          <div>right</div>
        </div>
        {
          this.props.popUpInfo
          &&
          <PopUp game={this.props.popUpInfo}/>
        }
      </nav>
    )
  }
}

export default Carousel;