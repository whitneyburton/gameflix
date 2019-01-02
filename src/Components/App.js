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
      isHomePage: true,
      errors: null,
      games: null,
      genres: null,
      popUpInfo: null,
      popUpGenre: null,
      searching: '',
      searchPageCheck: false,
      filteredGames: [],
      filterOptions: {
        type: {
          card: false,
          board: false
        },
        players: {
          two: false,
          threefour: false,
          fivesix: false,
          seven: false
        },
        age: {
          lesseight: false,
          eightthirteen: false,
          thirteenplus: false,
          adult: false
        },
        genre: {
          strategy: false,
          family: false,
          party: false,
          adventure: false
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

  resetAllGames = (event) => {
    let games = [...this.state.games]
    let filteredGames;
    let searchPageCheck;
    let dataNav = event.target.dataset.nav;
    let filterOptions = {
      type: {
        card: false,
        board: false
      },
      players: {
        two: false,
        threefour: false,
        fivesix: false,
        seven: false
      },
      age: {
        lesseight: false,
        eightthirteen: false,
        thirteenplus: false,
        adult: false
      },
      genre: {
        strategy: false,
        family: false,
        party: false,
        adventure: false
      }
    }

    document.querySelector('.AdvancedSearch').classList.remove('AdvancedSearchClicked');
    document.querySelectorAll('.adv-search-checkbox').forEach(checkbox => {
      checkbox.checked = false
    })
    document.querySelector('#input-value').value = '';
    document.querySelector('.searchbar').value = '';
    this.closePopUp();

    switch (dataNav) {
      case 'resetall':
        searchPageCheck = false;
        break;
      case 'resetboard':
        filterOptions.type.board = true;
        document.querySelector('#board').checked = true;
        filteredGames = games.filter(game => game.genre_ID.includes(6))
        searchPageCheck = true;
        break;
      case 'resetcard':
        filterOptions.type.card = true;
        document.querySelector('#card').checked = true;
        filteredGames = games.filter(game => game.genre_ID.includes(7))
        searchPageCheck = true;
        break;
    }

    this.setState({
      filterOptions,
      searchPageCheck,
      filteredGames: filteredGames || [],
      searching: '',
      showAdvancedSearch: false
    })
  }

  createPopUp = (event) => {
    const isCarousel = event.target.closest('.Carousel');
    const popUpGenre = isCarousel && event.target.closest('.Carousel').dataset.genre;
    let games = [...this.state.games];
    let popUpInfo = games.find(game => {
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
  checkCategory(event, dataFilter, filterOptions) {
    const dataCategory = event.target.dataset.category;

    if (dataCategory && document.querySelector(`#${dataFilter}`).checked)//Do we need to reach into dom to check this?
    {
      filterOptions[dataCategory][dataFilter] = true
    }
    else if (dataCategory) {
      filterOptions[dataCategory][dataFilter] = false;
    }
  }

  toggleCardOrBoard(dataFilter, filterOptions) {
    if (dataFilter === 'card') {
      filterOptions.type.board = false
      document.querySelector('#board').checked = false
    } else if (dataFilter === 'board') {
      filterOptions.type.card = false;
      document.querySelector('#card').checked = false
    }
  }

  setFilter = (event) => {
    const dataFilter = event.target.dataset.filter;
    const inputValue = document.querySelector('#input-value').value;
    const filterOptions = { ...this.state.filterOptions };
    const games = [...this.state.games];

    this.closePopUp();
    this.checkCategory(event, dataFilter, filterOptions);
    this.toggleCardOrBoard(dataFilter, filterOptions);


    let filteredGames = games
      .filter(game => {
        return filterOptions.type.board ?
          game.genre_ID.includes(6)
          :
          filterOptions.type.card ?
            game.genre_ID.includes(7)
            :
            game
      })
      .filter(game => {
        /*
          Object.keys(filterOptions.players).forEach()
         */
        if (filterOptions.players.two && game.min_players >= 1 && game.max_players <= 2
          || (filterOptions.players.threefour && (game.min_players <= 3 && 4 <= game.max_players))
          || (filterOptions.players.fivesix && (game.min_players <= 5 && 6 <= game.max_players))
          || (filterOptions.players.seven && (game.min_players >= 7))) {
          return game
        } else if (!(filterOptions.players.two
          || filterOptions.players.threefour
          || filterOptions.players.fivesix
          || filterOptions.players.seven)) {
          return game;
        } 

      })
      .filter(game => {
        if ((filterOptions.age.lesseight && (game.min_age < 8))
          || (filterOptions.age.eightthirteen && (game.min_age >= 8 && 13 >= game.min_age))
          || (filterOptions.age.thirteenplus && (game.min_age >= 13))
          || (filterOptions.age.adult && (game.min_age >= 21))) {
          return game
        } else if (filterOptions.age.lesseight || filterOptions.age.thirteenplus || filterOptions.age.eightthirteen || filterOptions.age.adult) {
          return
        } else {
          return game
        }
      })
      .filter(game => {
        if (filterOptions.genre.strategy && game.genre_ID.includes(1)
          || filterOptions.genre.family && game.genre_ID.includes(2)
          || filterOptions.genre.party && game.genre_ID.includes(3)
          || filterOptions.genre.adventure && game.genre_ID.includes(8)) {
          return game
        } else if (filterOptions.genre.strategy || filterOptions.genre.family || filterOptions.genre.party || filterOptions.genre.adventure) {
          return
        } else {
          return game
        }
      })

    if (inputValue) {
      filteredGames = filteredGames.filter(game => game.game.toLowerCase().includes(inputValue))
        .sort((a, b) => a.game.localeCompare(b.game));
    }

    const searchPageCheck = (filteredGames.length < this.state.games.length) || inputValue ? true : false;

    this.setState({
      filterOptions,
      filteredGames,
      searchPageCheck
    })
  }

  handleTransition = (place) => {
    this.setState({
      isHomePage: place === "HomePage" ? true : false
    })
  }

  render() {
    let { errors, games,
      genres, popUpInfo, popUpGenre, searchPageCheck, filteredGames, showAdvancedSearch, isHomePage } = this.state;
    if (isHomePage) {
      return <HomePage handleTransition={this.handleTransition} />
    }
    else if (genres && games && !errors) {
      return (
        <div className="App">
          <Navbar
            showAdvancedSearch={showAdvancedSearch}
            checkFilterInput={this.checkFilterInput}
            resetAllGames={this.resetAllGames}
            setFilter={this.setFilter}
            handleTransition={this.handleTransition}
          />
          {

            searchPageCheck ?
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
