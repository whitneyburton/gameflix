import React, { Component } from 'react';


export default class AdvancedSearch extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="AdvancedSearch">
        <form onClick={this.props.setAdvancedFilter}>
          <div>
            <p>Type of Game</p>
            <input name="type-checkbox" id="board" data-id="board" type="checkbox" />
            <label for="board">Board</label>
            <input  name="type-checkbox" id="card" data-id="card" type="checkbox" />
            <label for="card">Card</label>
          </div>
          <div>
            <p># of Players</p>
            <input id="number-players-checkbox" class="2" type="checkbox" />
            <label for="number-players-checkbox">
              2 players
          </label>
            <input id="number-players-checkbox" class="3-4" type="checkbox" />
            <label for="number-players-checkbox">
              3-4 players
          </label>
            <input id="number-players-checkbox" class="5-6" type="checkbox" />
            <label for="number-players-checkbox">
              5-6 players
          </label>
            <input id="number-players-checkbox" class="7" type="checkbox" />
            <label for="number-players-checkbox">
              7+ players
          </label>
          </div>
          <div>
            <p>Age</p>
            <input id="number-players-checkbox" type="checkbox" />
            <label for="number-players-checkbox">
              less than 8
          </label>
            <input id="number-players-checkbox" type="checkbox" />
            <label for="number-players-checkbox">
              8 - 13
          </label>
            <input id="number-players-checkbox" type="checkbox" />
            <label for="number-players-checkbox">
              13+
          </label>
            <input id="number-players-checkbox" type="checkbox" />
            <label for="number-players-checkbox">
              Adult
          </label>
          </div>
        </form>
      </div>
    )
  }
}