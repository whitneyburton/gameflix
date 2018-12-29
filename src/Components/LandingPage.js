import React, { Component } from 'react';
import Featured from './Featured';
import Carousel from './Carousel';
import PopUp from './PopUp'
import { uid } from 'react-uid';

export default class LandingPage extends Component {
  render() {
    let { games, genres, popUpInfo, popUpGenre, closePopUp, createPopUp } = this.props;
    return (
      <div className="LandingPage">
        <Featured data={games} />

        {genres.map(genre => {
          let matchingGames = games
            .filter(game => game.genre_ID.includes(genre.genreID))

          return (
            <div key={uid(genre)}>
              <Carousel
                genre={genre}
                matchingGames={matchingGames}
                createPopUp={createPopUp}
                closePopUp={closePopUp} >
                {
                  popUpGenre === genre.genre &&
                  <PopUp
                    closePopUp={closePopUp}
                    showPopUp={this.showPopUp}
                    dontShowPopUp={this.dontShowPopUp}
                    game={popUpInfo} />
                }
              </Carousel>
            </div>
          )
        })
        }
      </div>
    )
  }
}