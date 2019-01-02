import React, { Component } from 'react';

export default class PopUp extends Component {
  render() {
    const { isSearch, game, closePopUp } = this.props;
    let className;
    let iconClassName;

    isSearch ? className = "search-popup" : className = "PopUp"

    switch (game.challenge_level) {
      case 'simple':
        iconClassName = "fas fa-thermometer-quarter"
        break;
      case 'average':
        iconClassName = "fas fa-thermometer-half"
        break;
      default:
        iconClassName = "fas fa-thermometer-full"
    }

    return (
      <div className={className}>
        <section class="game-details">

          <i onClick={closePopUp} className="fas fa-times"></i>
          <h1 class="game-name">
            {game.game}
          </h1>
          <div class="game-info">
            <p class="age-range"><i class="fas fa-birthday-cake"></i> Ages {game.min_age} +</p>
            <p class="num-of-players"><i class="fas fa-users"></i> {game.min_players} - {game.max_players} players</p>
            <p class="num-of-minutes"><i class="fas fa-clock"></i> {game.number_of_minutes} min.</p>
          </div>
          <p class="game-description">{game.description}</p>
          <p class="difficulty-level">
            Challenge level: {game.challenge_level}
            <i className={iconClassName}></i>
          </p>
          <img className="carousel-image popup-image" src={game.img} alt="game in box" />
        </section>

        <section class="youtube-video">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${game.youtube}?autoplay=0`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="featured-video">
          </iframe>
        </section>
      </div>
    )
  }
}

