import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Featured from './Components/Featured';
import Carousel from './Components/Carousel';
import Data from './Data'
class App extends Component {

  constructor() {
    super();
    this.state = {
      areGamesLoaded: false,
      areGenresLoaded: false,
      games: null,
      genres: null,
      error: null
    }
  }

  componentDidMount() {
    fetch('https://whateverly-datasets.herokuapp.com/api/v1/games')
      .then(data => data.json())
      .then(result => this.setState({
        areGamesLoaded: true,
        games: result.games
      }))
      .catch(error => {
        this.setState({
          error
        })
      })
    

    fetch('https://whateverly-datasets.herokuapp.com/api/v1/genres')
      .then(data => data.json())
      .then(result => this.setState({
        areGenresLoaded: true,
        genres: result.genres
      }))
      .catch(error => {
        this.setState({
          error
        })
      })
  }

  render() {
    if (this.state.error) {
      return <div>SOMETHING IS BAD 💩 </div>
    }
    else if (this.state.areGamesLoaded && this.state.areGenresLoaded) {
      return (
        <div className="App">
          <Navbar />

          <Featured data={this.state.games} />

          {this.state.genres.map(genre => {
            let matchingGames = this.state.games.filter(game => {
              return game.genre_ID.includes(genre.genreID);
            })
            return <Carousel genre={genre} matchingGames={matchingGames} />
          }
          )}

        </div>
      );
    } else {
      return (<div>LOADING</div>)
    }
  }
}

export default App;
