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
      filteredGames: null,
      filterByType: [],
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
      filteredGames: filteredGames || null,
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
    let gamesToFilter;
    if (this.state.filteredGames.length === 0) {
      gamesToFilter = this.state.games;
    } else {
      gamesToFilter = this.state.filteredGames;
    }
    let gamesToStore = gamesToFilter.filter(game => game.game.toLowerCase().includes(inputValue))
      .sort((a, b) => a.game.localeCompare(b.game));

        if(gamesToStore.length === 0) {
          gamesToStore = null;
        }
    this.closePopUp();
    this.setState({
      searching: inputValue,
      filteredGames: gamesToStore
    });
  }
  setAdvancedFilter = (event) => {
    // event.preventDefault();
    let dataId = event.target.dataset.id;
    // let { card, board } = this.state.filterOptions.type;
    // let { filterOptions } = this.state;
    let holder = this.state.filterOptions;

    // debugger
    switch (dataId) {

      case 'card':
        if (document.querySelector('#card').checked) {
          holder.type.card = true;
          holder.type.board = false;
        } else {
          holder.type.card = false
        }
        document.querySelector('#board').checked = false

        break;
      case 'board':
        if (document.querySelector('#board').checked) {
          holder.type.board = true;
          holder.type.card = false;
        } else {
          holder.type.board = false
        }
        document.querySelector('#card').checked = false

        break;

    }

    let advancedFilteredGames = this.state.games;

    let newGames = advancedFilteredGames
      .filter(game => (holder.type.board ? (game.genre_ID.includes(6))
        : holder.type.card ? (game.genre_ID.includes(7)) : game))

    // .filter(game => (filterOptions[2] ? (game.min_age < 8)
    //   : filterOptions[3] ? (game.min_age > 8 && game.min_age < 13)
    //     : filterOptions[4] ? (game.min_age > 13)
    //       : filterOptions[5] ? (game.min_age > 20) : game))

      if (newGames.length === 0) {
        newGames = null
      }
    this.setState({
      filterOptions: holder,
      filteredGames: newGames,
      // searching: true
    })
  }





  advancedFilter = () => {

  }

  render() {
    let { errors, games,
      genres, popUpInfo, popUpGenre, searching, filteredGames } = this.state;

    if (genres && games && !errors) {
      return (
        <div className="App">
          <Navbar
            checkFilterInput={this.checkFilterInput}
            resetAllGames={this.resetAllGames}
            setAdvancedFilter={this.setAdvancedFilter}
          />
          {
            filteredGames ?
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
