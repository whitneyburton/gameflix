import React, { Component } from 'react';
import GameCard from './GameCard';
import PopUp from './PopUp';

export default class SearchPage extends Component {
  render() {
    const { filteredGames, createPopUp, popUpInfo, closePopUp } = this.props;

    return (
      <div className="SearchPage">
        <div className="search-results-counter">Search Results: {filteredGames.length} </div>
        <div className="all-search-cards">
          {
            filteredGames.map(game => {
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
      </div>
    )
  }
}