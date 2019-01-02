import React, { Component } from 'react';
import AdvancedSearch from './AdvancedSearch'

export default class Navbar extends Component {
 
  render() {
    return (
      <nav className="Navbar">
        <div class="filter-buttons">
          <h2 class="title">GAMEFLIX</h2>
          <div class="filters-column-one">
            <p class="reset-games" onClick={() => this.props.resetAllGames('')}>All Games</p>
            <p class="filter-boardgames" onClick={() => this.props.resetAllGames(6)}>Board Games</p>
          </div>
          <div class="filters-column-two">
            <p class="filter-cardgames" onClick={() => this.props.resetAllGames(7)}>Card Games</p>
            <p class="advanced-search" onClick={this.toggleAdvancedSearch}>Advanced Search</p>
          </div>

        </div>
        <form class="search-field">
          <i class="fas fa-search"></i>
          <input
            id="input-value"
            onChange={this.props.setAdvancedFilter}
            type="text"
            className="searchbar"
            placeholder="Search all games">
          </input>
        </form>
        {this.props.showAdvancedSearch && <AdvancedSearch setAdvancedFilter={this.props.setAdvancedFilter}/>}
      </nav >
    )
  }
}