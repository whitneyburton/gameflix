import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar">
        <div class="hamburger-filters">
          <p class="reset-games" onClick={this.props.resetAllGames}>All Games</p>
          <p class="filter-boardgames">Board Games</p>
          <p class="filter-cardgames">Card Games</p>
          <p class="filter-cardgames" onClick="showAdvancedSearch">Advanced Search</p>
          
        </div>
        <form class="search-field">
          <i class="fas fa-search"></i>
          <input
            onChange={this.props.checkFilterInput}
            type="text"
            className="searchbar"
            placeholder= "Search all games">
          </input>
        </form>
      </nav>
    )
  }
}