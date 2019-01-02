import React, { Component } from 'react';

export default class HomePage extends Component {

  render() {
    const { handleTransition } = this.props;
    return (
      <div className="HomePage">
        <h1>GameFlix</h1>
        <div onClick={() => handleTransition('LandingPage')} className="enter-button">Enter</div>
      </div>
    )
  }
}