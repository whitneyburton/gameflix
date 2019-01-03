import React, { Component } from 'react';


export default class AdvancedSearch extends Component {

  render() {
    return (
      <div className="AdvancedSearch">
        <form className="advanced-search-form form" onClick={this.props.setFilter}>
          <div className="filter-by-type">
            <p className="filter-title">GAME TYPE</p>
            <div className="checkbox-and-label">
              <input name="type-checkbox" id="board" class="adv-search-checkbox" data-category="type" data-filter="board" type="checkbox" />
              <label for="board">Board Game</label>
            </div>
            <div className="checkbox-and-label">
              <input name="type-checkbox" id="card" class="adv-search-checkbox" data-category="type" data-filter="card" type="checkbox" />
              <label for="card">Card Game</label>
            </div>
          </div>
          <div className="filter-by-players">
            <p className="filter-title">NUMBER OF PLAYERS</p>
            <div className="checkbox-and-label">
              <input id="two" class="adv-search-checkbox" data-category="players" data-filter="two" type="checkbox" />
              <label for="number-players-checkbox">2 players</label>
            </div>
            <div className="checkbox-and-label">
              <input id="threefour" class="adv-search-checkbox" data-category="players" data-filter="threefour" type="checkbox" />
              <label for="number-players-checkbox">3 - 4 players</label>
            </div>
            <div className="checkbox-and-label">
              <input id="fivesix" class="adv-search-checkbox" data-category="players" data-filter="fivesix" type="checkbox" />
              <label for="number-players-checkbox">5 - 6 players</label>
            </div>
            <div className="checkbox-and-label">
              <input id="seven" class="adv-search-checkbox" data-category="players" data-filter="seven" type="checkbox" />
              <label for="number-players-checkbox">7 + players</label>
            </div>
          </div>
          <div className="filter-by-age">
            <p className="filter-title">AGE RANGE</p>
            <div className="checkbox-and-label">
              <input id="lesseight" class="adv-search-checkbox" data-category="age" data-filter="lesseight" type="checkbox" />
              <label for="number-players-checkbox">8 and Under</label>
            </div>
            <div className="checkbox-and-label">
              <input id="eightthirteen" class="adv-search-checkbox" data-category="age" data-filter="eightthirteen" type="checkbox" />
              <label for="number-players-checkbox">8 - 13</label>
            </div>
            <div className="checkbox-and-label">
              <input id="thirteenplus" class="adv-search-checkbox" data-category="age" data-filter="thirteenplus" type="checkbox" />
              <label for="number-players-checkbox">13 and Over</label>
            </div>
            <div className="checkbox-and-label">
              <input id="adult" class="adv-search-checkbox" data-category="age" data-filter="adult" type="checkbox" />
              <label for="number-players-checkbox">Adult Only</label>
            </div>
          </div>

          <div className="filter-by-genre">
            <p className="filter-title">GENRE</p>
            <div className="checkbox-and-label">
              <input id="strategy" class="adv-search-checkbox" data-category="genre" data-filter="strategy" type="checkbox" />
              <label for="number-players-checkbox">Strategy</label>
            </div>
            <div className="checkbox-and-label">
              <input id="family" class="adv-search-checkbox" data-category="genre" data-filter="family" type="checkbox" />
              <label for="number-players-checkbox">Family</label>
            </div>
            <div className="checkbox-and-label">            
              <input id="party" class="adv-search-checkbox" data-category="genre" data-filter="party" type="checkbox" />
              <label for="number-players-checkbox">Party</label>
            </div>
            <div className="checkbox-and-label">            
              <input id="adventure" class="adv-search-checkbox" data-category="genre" data-filter="adventure" type="checkbox" />
              <label for="number-players-checkbox">Adventure</label>
            </div>
          </div>
        </form>
      </div>
        )
      }
}