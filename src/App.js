import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import SearchPage from './Components/SearchPage';


class App extends Component {

  constructor() {
    super();
    this.state = {
      areGamesLoaded: false,
      areGenresLoaded: false,
      games: null,
      genres: null,
      error: null,
      popUpInfo: null,
      popUpGenreID: null,
      searching: ''
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

  createPopUp = (event, genreID) => {
    const popUpInfo = this.state.games
      .find(game => {
        return game.img === event.target.src;
      })
    this.setState({ popUpInfo, popUpGenreID: genreID });
  }

  render() {
    let { error, areGamesLoaded, areGenresLoaded, games, 
          genres, popUpInfo, popUpGenreID, searching } = this.state;
    if (error) {
      return <div>SOMETHING IS BAD 💩 </div>
    } else if (areGamesLoaded && areGenresLoaded) {
      return (
        <div className="App">
          <Navbar />
          {searching ? <SearchPage /> :
            <LandingPage
              genres={genres}
              games={games}
              popUpInfo={popUpInfo}
              popUpGenreID={popUpGenreID}
              createPopUp={this.createPopUp} />
          }
        </div>
      );
    } else {
      return (<div>LOADING</div>)
    }
  }
}

export default App;
