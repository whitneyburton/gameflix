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
      data: Data
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar />
  
        <Featured data={this.state.data.games} />
          {this.state.data.genres.map(genre => {
            let matchingGames = this.state.data.games.filter(game => {
              return game.genre_ID.includes(genre.genreID);
            })
            return <Carousel  genre = {genre}
                              matchingGames = {matchingGames} />
          }
        )}

      </div>
    );
  }
}

export default App;
