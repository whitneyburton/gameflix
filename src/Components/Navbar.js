import React, { Component } from 'react';
import AdvancedSearch from './AdvancedSearch'

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      showAdvancedSearch: true
    }
  }

  toggleAdvancedSearch = () => {
    this.setState({
      showAdvancedSearch: !this.state.showAdvancedSearch
    })
  }
  render() {
    return (
      <nav className="Navbar">
        <div class="hamburger-filters">
          <p class="reset-games" onClick={() => this.props.resetAllGames('')}>All Games</p>
          <p class="filter-boardgames" onClick={() => this.props.resetAllGames(6)}>Board Games</p>
          <p class="filter-cardgames" onClick={() => this.props.resetAllGames(7)}>Card Games</p>
          <p class="filter-cardgames" onClick={this.toggleAdvancedSearch}>Advanced Search</p>

        </div>
        <form class="search-field">
          <i class="fas fa-search"></i>
          <input
            onChange={this.props.checkFilterInput}
            type="text"
            className="searchbar"
            placeholder="Search all games">
          </input>
        </form>
        {this.state.showAdvancedSearch && <AdvancedSearch />}
      </nav >
    )
  }
}