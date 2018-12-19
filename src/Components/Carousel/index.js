import React, { Component } from 'react';
import './Carousel.css';
import PopUp from '../PopUp'

class Carousel extends Component {
  constructor() {
    super();
    this.state = {
      shouldPopUp: false,
      popUpInfo: {}
    }
  }

  createPopUp =(event)=> {
    const popUpInfo  = this.props.matchingGames
    .find(game => {
      return game.img === event.target.src;
    }) 

    this.setState({ shouldPopUp:true,popUpInfo });
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
                  <div onClick={this.createPopUp} className="game-card">
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
          this.state.shouldPopUp
          &&
          <PopUp game={this.state.popUpInfo}/>
        }
      </nav>
    )
  }
}

export default Carousel;