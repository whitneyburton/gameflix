import React, { Component } from 'react';
import './styles/Main.scss';
import Navbar from './Components/Navbar.js';
import LandingPage from './Components/LandingPage.js';
import SearchPage from './Components/SearchPage.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      errors: null,
      games: null,
      genres: null,
      popUpInfo: null,
      popUpGenre: null,
      searching: '',
      filteredGames: []
    }
  }
  getData = (request) => {
    const url = 'https://whateverly-datasets.herokuapp.com/api/v1/';

    fetch(`${url + request}`)
      .then(data => data.json())
      .then(result => this.setState({
        [request]: result[request]
      }))
      .catch(errors => {
        this.setState({
          errors
        })
      })
  }

  componentDidMount() {
    this.getData('games');
    this.getData('genres');
  }

  createPopUp = (event) => {
    const isCarousel = event.target.closest('.Carousel');
    const popUpGenre = isCarousel && event.target.closest('.Carousel').dataset.genre;

    const popUpInfo = this.state.games
      .find(game => {
        return game.game === event.target.closest('div').innerText;
      });

    this.setState({ popUpInfo, popUpGenre });
  }

  closePopUp = () => {
    this.setState({
      popUpInfo: null,
      popUpGenre: null
    })
  }

  checkFilterInput = (event) => {
    let inputValue = event.target.value.toLowerCase();
    const filteredGames = this.state.games
      .filter(game => game.game.toLowerCase().includes(inputValue))
      .sort((a, b) => a.game.localeCompare(b.game));

    this.closePopUp();
    this.setState({
      searching: inputValue,
      filteredGames
    });
  }

  render() {
    let { errors, games,
      genres, popUpInfo, popUpGenre, searching, filteredGames } = this.state;

    if (genres && games && !errors) {
      return (
        <div className="App">
          <Navbar checkFilterInput={this.checkFilterInput} />
          {
            searching ?
              <SearchPage
                filteredGames={filteredGames}
                popUpInfo={popUpInfo}
                createPopUp={this.createPopUp}
                closePopUp={this.closePopUp} />
              :
              <LandingPage
                genres={genres}
                games={games}
                popUpInfo={popUpInfo}
                popUpGenre={popUpGenre}
                createPopUp={this.createPopUp}
                closePopUp={this.closePopUp} />
          }
        </div>
      );
    }

    if (errors) {
      return <span role={"img"} aria-label="error">SOMETHING IS BAD 💩 </span>
    } else {
      return (<div>LOADING</div>)
    }
  }
}

export default App;
