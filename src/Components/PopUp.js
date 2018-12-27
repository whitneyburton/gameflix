import React, { Component } from 'react';

export default class PopUp extends Component {
  render() {
    const { isSearch, game, closePopUp } = this.props;
    let className = "PopUp";

    if (isSearch) {
      className = "search-popup"
    }

    return (
      <div className={className}>
        <section>
          <i onClick={closePopUp} className="fas fa-times"></i>
          <h1 class="game-name">{game.game}</h1>
          <div class="game-info">
            <p class="age-range"><i class="fas fa-birthday-cake"></i> Ages {game.min_age}+</p>
            <p class="num-of-players"><i class="fas fa-users"></i> {game.min_players} - {game.max_players} players</p>
            <p class="num-of-minutes"><i class="fas fa-clock"></i> {game.number_of_minutes} min.</p>
          </div>
          <p class="game-description">{game.description}</p>
          
          <img className="carousel-image" src={game.img} alt="game in box" />
        </section>

        <section>
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