import React, { Component } from 'react';

export default class Featured extends Component {
  render() {

    return (
      <nav className="Featured">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${this.props.data[1].youtube}?autoplay=0`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="featured-video">
        </iframe>
      </nav>
    );
  }
}