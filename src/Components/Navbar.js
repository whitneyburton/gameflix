import React, { Component } from 'react';
import AdvancedSearch from './AdvancedSearch'

export default class Navbar extends Component {

  toggleAdvancedSearch = () => {
    document.querySelector('.AdvancedSearch').classList.toggle('AdvancedSearchClicked');
  }

  render() {
    const { resetAllGames, handleTransition, setFilter } = this.props;
    return (
      <nav className="Navbar">
        <div className="main-nav">
          <div className="filter-buttons">
            <h2 className="title" onClick={() => handleTransition("HomePage")}>GAMEFLIX</h2>
            <div className="filters-column-one">
              <p className="nav-btn" data-nav="resetall" onClick={resetAllGames}>All Games</p>
              <p className="nav-btn" data-nav="resetboard" onClick={resetAllGames}>Board Games</p>
            </div>
            <div className="filters-column-two">
              <p className="nav-btn" data-nav="resetcard" onClick={resetAllGames}>Card Games</p>
              <p className="nav-btn advanced-search " onClick={this.toggleAdvancedSearch}>Advanced Search</p>
            </div>
          </div>
          <form className="search-field">
            <i className="fas fa-search"></i>
            <input
              id="input-value"
              onChange={setFilter}
              type="text"
              className="searchbar"
              placeholder="Search games">
            </input>
          </form>
        </div>
        <AdvancedSearch setFilter={setFilter} />
      </nav >
    )
  }
}