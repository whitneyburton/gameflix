import React, { Component } from 'react';
import './Featured.css';

const Featured = (props) => {
  debugger
  return (
    <nav className="Featured">
      <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + props.data[0].youtube} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </nav>
  )
}

export default Featured;