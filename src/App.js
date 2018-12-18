import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Featured from './Components/Featured';
import Carousel from './Components/Carousel';
import Data from './Data'
class App extends Component {

  constructor() {
    super();
    this.state = {data:Data}
  }

  render() {
    return (
      <div className="App">
        <Navbar  />
        <Featured data={this.state.data.games}/>
        <Carousel data={this.state.data} />

      </div>
    );
  }
}

export default App;
