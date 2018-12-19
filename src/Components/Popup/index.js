import React, { Component } from 'react';

export default class Popup extends Component{
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div>{this.props.game.game}</div>
    )
  }


}



