import React, { Component } from 'react';

export default class HomePage extends Component {

  render() {
    const { handleTransition } = this.props;
    return (
      <div className="HomePage">
        <h1 className="gameflix-title">GameFlix</h1>
        <div className="underline openAnimate"></div>
        <p className="mission-statement openAnimate">Discover your new favorite game to bring to the table.</p>
        <div onClick={() => handleTransition('LandingPage')} className="enter-button">Enter</div>
      </div>
    )
  }
}