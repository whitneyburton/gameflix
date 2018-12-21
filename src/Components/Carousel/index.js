import React, { Component } from 'react';
import './Carousel.css';
import PopUp from '../PopUp';

class Carousel extends Component {
  render() {
    return (
      <nav className="Carousel">
        <h4 className="genre-name">{this.props.genre.genre}</h4>
        <div className="carousel-bar">
          <div><i class="fas fa-angle-left"></i></div>
          <div className="scroll-container">

            {this.props.matchingGames.map(game => {
              return (
                <div key={game} className="carousel-game">
                  <div onClick={(event) => this.props.createPopUp(event, this.props.genre.genreID)} className="game-card">
                    <span>{game.game}</span>
                    <img className="carousel-image" src={game.img} alt="game board"></img>
                  </div>
                </div>
              )
            })}
          </div>
          <div><i class="fas fa-angle-right"></i></div>
        </div>
        {
          this.props.popUpInfo
          &&
          <PopUp 
            closePopUp={this.props.closePopUp}            
            game={this.props.popUpInfo}/>
        }
      </nav>
    )
  }
}

export default Carousel;