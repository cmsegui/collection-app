import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HomeStyle } from '../styles/Homepage';

class Homepage extends Component {
  render() {
    return (
      <div>
        <h1>Sneaker</h1><h1>Headz</h1>
        <Link to="/users">
          <img src="http://i.imgur.com/LqY8tvg.jpg" alt="sneakerhead" className="homeimg" />
        </Link>
      </div>
    );
  }
}

export default Homepage;
