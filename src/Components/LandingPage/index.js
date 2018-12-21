import React, { Component } from 'react';
import Featured from '../Featured';
import Carousel from '../Carousel';
import './LandingPage.css';

export default class LandingPage extends Component {
  render() {
    let { games, genres, popUpInfo, popUpGenreID } = this.props;
    return (
      <div className="LandingPage">
        <Featured data={games} />
        {genres.map(genre => {
          let matchingGames = games
            .filter(game => game.genre_ID.includes(genre.genreID))

          return (
            <div key={genre}>
              <Carousel
                genre={genre}
                matchingGames={matchingGames}
                createPopUp={this.props.createPopUp}
                closePopUp={this.props.closePopUp}
                popUpInfo={(popUpGenreID === genre.genreID) && popUpInfo} />
            </div>
          )
        })
        }
      </div>
    )
  }
}