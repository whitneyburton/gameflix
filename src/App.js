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
      searchPageCheck: false,
      showAdvancedSearch: false,
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

  resetAllGames = (type) => {

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

    document.querySelectorAll('.adv-search-checkbox').forEach(checkbox => {
      checkbox.checked = false
    })

    document.querySelector('.searchbar').value = '';
    this.closePopUp();

    let games = this.state.games
    let filteredGames;
    let searchPageCheck;

    if (type === 6) {
      filterOptions.type.board = true;
      // document.querySelector('#board').checked = true;
      filteredGames = games.filter(game => game.genre_ID.includes(6))
      searchPageCheck = true;
    } else if (type === 7) {
      filterOptions.type.card = true;
      // document.querySelector('#card').checked = true;
      filteredGames = games.filter(game => game.genre_ID.includes(7))
      searchPageCheck = true;
    } else {
      searchPageCheck = false;
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

  toggleAdvancedSearch = () => {
    this.setState({
      showAdvancedSearch: !this.state.showAdvancedSearch
    })
  }
  
  setAdvancedFilter = (event) => {
    let dataId = event.target.dataset.id;
    let holder = this.state.filterOptions;
    let inputValue = document.querySelector('#input-value').value

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

      case 'two':
        (document.querySelector('#two').checked) ? holder.players.two = true : holder.players.two = false;
        break;
      case 'threefour':
        (document.querySelector('#threefour').checked) ? holder.players.threefour = true : holder.players.threefour = false;
        break;
      case 'fivesix':
        (document.querySelector('#fivesix').checked) ? holder.players.fivesix = true : holder.players.fivesix = false;
        break;
      case 'seven':
        (document.querySelector('#seven').checked) ? holder.players.seven = true : holder.players.seven = false;
        break;

      case 'lesseight':
        (document.querySelector('#lesseight').checked) ? holder.age.lesseight = true : holder.age.lesseight = false;
        break;
      case 'eightthirteen':
        (document.querySelector('#eightthirteen').checked) ? holder.age.eightthirteen = true : holder.age.eightthirteen = false;
        break;
      case 'thirteenplus':
        (document.querySelector('#thirteenplus').checked) ? holder.age.thirteenplus = true : holder.age.thirteenplus = false;
        break;
      case 'adult':
        (document.querySelector('#adult').checked) ? holder.age.adult = true : holder.age.adult = false;
        break;

      case 'strategy':
        (document.querySelector('#strategy').checked) ? holder.genre.strategy = true : holder.genre.strategy = false;
        break;
      case 'family':
        (document.querySelector('#family').checked) ? holder.genre.family = true : holder.genre.family = false;
        break;
      case 'party':
        (document.querySelector('#party').checked) ? holder.genre.party = true : holder.genre.party = false;
        break;
      case 'adventure':
        (document.querySelector('#adventure').checked) ? holder.genre.adventure = true : holder.genre.adventure = false;
        break;
    }

    let advancedFilteredGames = this.state.games;
    let newGames = advancedFilteredGames
      .filter(game => (holder.type.board ? (game.genre_ID.includes(6))
        : holder.type.card ? (game.genre_ID.includes(7)) : game))
      .filter(game => {
        if ((holder.players.two && (game.min_players <= 2 && 2 <= game.max_players))
          || (holder.players.threefour && (game.min_players <= 3 && 4 <= game.max_players))
          || (holder.players.fivesix && (game.min_players <= 5 && 6 <= game.max_players))
          || (holder.players.seven && (game.min_players <= 7 && 7 <= game.max_players))) {
          return game
        } else if (holder.players.two || holder.players.threefour || holder.players.fivesix || holder.players.seven) {
          return
        } else {
          return game
        }
      })
      .filter(game => {
        if ((holder.age.lesseight && (game.min_age < 8))
          || (holder.age.eightthirteen && (game.min_age >= 8 && 13 >= game.min_age))
          || (holder.age.thirteenplus && (game.min_age >= 13))
          || (holder.age.adult && (game.min_age >= 21))) {
          return game
        } else if (holder.age.lesseight || holder.age.thirteenplus || holder.age.eightthirteen || holder.age.adult) {
          return
        } else {
          return game
        }
      })
      .filter(game => {
        if ((holder.genre.strategy && (game.genre_ID.includes(1)))
          || (holder.genre.family && (game.genre_ID.includes(2)))
          || (holder.genre.party && (game.genre_ID.includes(3)))
          || (holder.genre.adventure && (game.genre_ID.includes(8)))) {
          return game
        } else if (holder.genre.strategy || holder.genre.family || holder.genre.party || holder.genre.adventure) {
          return
        } else {
          return game
        }
      })

    if (inputValue) {
      newGames = newGames.filter(game => game.game.toLowerCase().includes(inputValue))
        .sort((a, b) => a.game.localeCompare(b.game));
    }

    const searchPageCheck = (newGames.length < this.state.games.length) || inputValue ? true : false
    this.setState({
      filterOptions: holder,
      filteredGames: newGames,
      searchPageCheck
    })

  }

  render() {
    let { errors, games,
      genres, popUpInfo, popUpGenre, searchPageCheck, filteredGames, showAdvancedSearch } = this.state;
    if (genres && games && !errors) {
      return (
        <div className="App">
          <Navbar
            toggleAdvancedSearch={this.toggleAdvancedSearch}
            showAdvancedSearch={showAdvancedSearch}
            checkFilterInput={this.checkFilterInput}
            resetAllGames={this.resetAllGames}
            setAdvancedFilter={this.setAdvancedFilter}
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
