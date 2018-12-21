import React, { Component } from 'react';
import './SearchPage.css';
import PopUp from '../PopUp';


export default class SearchPage extends Component {
  render() {
    return (
      <div className="SearchPage">
        {this.props.filteredGames.map(game => {
          return (
            <div key={game} className="carousel-game">
              <div className="game-card" onClick={this.props.createPopUp}>
                <span>{game.game}</span>
                <img className="carousel-image" src={game.img} alt="game board"></img>
              </div>
            </div>
          )
        })}
        {
          this.props.popUpInfo &&
          <PopUp
            game={this.props.popUpInfo}
            isSearch={this.props.popUpInfo}
            closePopUp={this.props.closePopUp} />
        }
      </div>
    )
  }
}