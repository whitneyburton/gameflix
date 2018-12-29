import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar">
        <div class="hamburger-filters">
          <i class="fas fa-bars"></i>
          <p class="home">Home</p>
          <p class="filter-boardgames">Board Games</p>
          <p class="filter-cardgames">Card Games</p>
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