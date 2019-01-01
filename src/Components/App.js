import React, { Component } from 'react';
import '../styles/Main.scss';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import SearchPage from './SearchPage';
import HomePage from './HomePage';


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
      filteredGames: [],
      filterOptions: {
        type: {
          card: false,
          board: false
        },
        players: {
          2: false,
          34: false,
          56: false,
          7: false
        },
        age: {
          '<8': false,
          '8-13': false,
          '13+': false,
          'adult': false
        }

      }

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

  resetAllGames = (type) => {
    const games = this.state.games;
    let filteredGames;
    document.querySelector('.searchbar').value = '';
    this.closePopUp();

    if (type) {
      filteredGames = games.filter(game => {
        return game.genre_ID.includes(type)
      })
    }
    this.setState({
      filteredGames: filteredGames || [],
      searching: filteredGames || ''
    })
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
    const inputValue = event.target.value.toLowerCase();
    const options = this.state.advancedOptions;
    const filteredGames = this.state.games
      .filter(game => game.game.toLowerCase().includes(inputValue))
      .sort((a, b) => a.game.localeCompare(b.game));
    this.closePopUp();
    this.setState({
      searching: inputValue,
      filteredGames
    });
  }

  setAdvancedFilter = (event) => {
    let dataId = event.target.dataset.id;
    let { card, board } = this.state.filterOptions.type;
    let { filterOptions } = this.state;

    switch (dataId) {
      case 'card':
        document.querySelector('#card').checked &&
          this.resetAllGames(7);
        document.querySelector('#board').checked = false;
        break;
      case 'board':
        document.querySelector('#board').checked &&
          this.resetAllGames(6);
        document.querySelector('#card').checked = false;
        break;
      default:
    }



    // let advancedFilteredGames =[];
    // let newGames;
    // if (!this.state.filteredGames.length) {
    //   advancedFilteredGames = this.state.games;
    // } else {
    //   advancedFilteredGames = this.state.filteredGames;
    // }

    // newGames = advancedFilteredGames
    //   .filter(game => (filterOptions.type.card ? (game.genre_ID.includes(7))
    //     : filterOptions.type.board ? (game.genre_ID.includes(6)) : game))
    // debugger
    // .filter(game => (filterOptions[2] ? (game.min_age < 8)
    //   : filterOptions[3] ? (game.min_age > 8 && game.min_age < 13)
    //     : filterOptions[4] ? (game.min_age > 13)
    //       : filterOptions[5] ? (game.min_age > 20) : game))

    // this.setState({
    //   filteredGames: newGames,
    //   searching: true
    // })
  }

  advancedFilter = () => {

  }

  render() {
    let { errors, games,
      genres, popUpInfo, popUpGenre, searching, filteredGames } = this.state;
    if (true) {
     return <HomePage />
    }
    else if (genres && games && !errors) {
      return (
        <div className="App">
          <Navbar
            checkFilterInput={this.checkFilterInput}
            resetAllGames={this.resetAllGames}
            setAdvancedFilter={this.setAdvancedFilter}
          />
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
