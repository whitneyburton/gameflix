import React, { Component } from 'react';


export default class AdvancedSearch extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="AdvancedSearch">
        <form onClick={this.props.setFilter}>
          <div>
            <p>Type of Game</p>
            <input name="type-checkbox" id="board" class="adv-search-checkbox" data-id="board" type="checkbox" />
            <label for="board">board</label>
            <input  name="type-checkbox" id="card" class="adv-search-checkbox" data-id="card" type="checkbox" />
            <label for="card">card</label>
          </div>
          <div>
            <p># of Players</p>
            <input  id="two" class="adv-search-checkbox" data-id="two" type="checkbox" />
            <label for="number-players-checkbox">
              2 players
          </label>
            <input  id="threefour" class="adv-search-checkbox" data-id="threefour" type="checkbox" />
            <label for="number-players-checkbox">
              3-4 players
          </label>
            <input  id="fivesix" class="adv-search-checkbox" data-id="fivesix" type="checkbox" />
            <label for="number-players-checkbox">
              5-6 players
          </label>
            <input  id="seven" class="adv-search-checkbox" data-id="seven" type="checkbox" />
            <label for="number-players-checkbox">
              7+ players
          </label>
          </div>
          <div>
            <p>Age</p>
            <input id="lesseight" class="adv-search-checkbox" data-id="lesseight" type="checkbox" />
            <label for="number-players-checkbox">
              less than 8
          </label>
            <input id="eightthirteen" class="adv-search-checkbox" data-id="eightthirteen" type="checkbox" />
            <label for="number-players-checkbox">
              8 - 13
          </label>
            <input id="thirteenplus" class="adv-search-checkbox" data-id="thirteenplus" type="checkbox" />
            <label for="number-players-checkbox">
              13+
          </label>
            <input id="adult" class="adv-search-checkbox" data-id="adult" type="checkbox" />
            <label for="number-players-checkbox">
              Adult
          </label>
          </div>

          <div>
            <p>Genre</p>
            <input id="strategy" class="adv-search-checkbox" data-id="strategy" type="checkbox" />
            <label for="number-players-checkbox">
              Strategy
          </label>
            <input id="family" class="adv-search-checkbox" data-id="family" type="checkbox" />
            <label for="number-players-checkbox">
              Family
          </label>
            <input id="party" class="adv-search-checkbox" data-id="party" type="checkbox" />
            <label for="number-players-checkbox">
              Party
          </label>
            <input id="adventure" class="adv-search-checkbox" data-id="adventure" type="checkbox" />
            <label for="number-players-checkbox">
              Adventure
          </label>
          </div>
        </form>
      </div>
    )
  }
}