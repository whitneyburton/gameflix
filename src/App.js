import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/';
import Featured from './Components/Featured/';
import Carousel from './Components/Carousel/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Featured />
        <Carousel />
      </div>
    );
  }
}

export default App;
