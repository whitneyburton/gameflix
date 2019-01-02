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
    return (
      <nav className="Navbar">
        <div className="main-nav">
          <div class="filter-buttons">
            <h2 class="title">GAMEFLIX</h2>
            <div class="filters-column-one">
              <p class="reset-games" data-nav="resetall" onClick={this.props.resetAllGames}>All Games</p>
              <p class="filter-boardgames" data-nav="resetboard" onClick={this.props.resetAllGames}>Board Games</p>
            </div>
            <div class="filters-column-two">
              <p class="filter-cardgames" data-nav="resetcard" onClick={this.props.resetAllGames}>Card Games</p>
              <p class="advanced-search" onClick={this.toggleAdvancedSearch}>Advanced Search</p>
            </div>
          </div>
          <form class="search-field">
            <i class="fas fa-search"></i>
            <input
              id="input-value"
              onChange={this.props.setFilter}
              type="text"
              className="searchbar"
              placeholder="Search all games">
            </input>
          </form>
        </div>
        <AdvancedSearch setFilter={this.props.setFilter} />
      </nav >
    )
  }
}