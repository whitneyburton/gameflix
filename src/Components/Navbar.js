import React, { Component } from 'react';
import AdvancedSearch from './AdvancedSearch'

export default class Navbar extends Component {
  constructor() {
    super();
  }

  toggleAdvancedSearch = () => {
    document.querySelector('.AdvancedSearch').classList.toggle('AdvancedSearchClicked');
  }

  render() {
    const { resetAllGames, handleTransition, setFilter } = this.props;
    return (
      <nav className="Navbar">
        <div className="main-nav">
          <div class="filter-buttons">
            <h2 class="title" onClick={() => handleTransition("HomePage")}>GAMEFLIX</h2>
            <div class="filters-column-one">
              <p class="reset-games" data-nav="resetall" onClick={resetAllGames}>All Games</p>
              <p class="filter-boardgames" data-nav="resetboard" onClick={resetAllGames}>Board Games</p>
            </div>
            <div class="filters-column-two">
              <p class="filter-cardgames" data-nav="resetcard" onClick={resetAllGames}>Card Games</p>
              <p class="advanced-search" onClick={this.toggleAdvancedSearch}>Advanced Search</p>
            </div>
          </div>
          <form class="search-field">
            <i class="fas fa-search"></i>
            <input
              id="input-value"
              onChange={setFilter}
              type="text"
              className="searchbar"
              placeholder="Search all games">
            </input>
          </form>
        </div>
        <AdvancedSearch setFilter={setFilter} />
      </nav >
    )
  }
}