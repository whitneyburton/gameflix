import React, { Component } from 'react';
import GameCard from './GameCard';
import PopUp from './PopUp';

export default class SearchPage extends Component {
  render() {
    const { filteredGames, createPopUp, popUpInfo, closePopUp } = this.props;

    return (
      <div className="SearchPage">
        {filteredGames.map(game => {
          return (
            <GameCard
              game={game}
              createPopUp={createPopUp}
            />
          )
        })}

        {popUpInfo &&
          <PopUp
            game={popUpInfo}
            isSearch={popUpInfo}
            closePopUp={closePopUp}
          />}
      </div>
    )
  }
}