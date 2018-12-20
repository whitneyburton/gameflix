import React, { Component } from 'react';
import './Navbar.css';

const Navbar = (props) => {
  return (
    <nav className="Navbar">
      <input type="text" className="searchbar" placeholder="Search Here"></input>
    </nav>
  )
}

export default Navbar;