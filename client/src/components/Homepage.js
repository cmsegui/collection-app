import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HomeStyle } from '../styles/Homepage';

class Homepage extends Component {
    render() {
        return (
            <HomeStyle>
                <div>
                    <h1>SNEAKERHEADZ</h1>
                    <img src='http://i.imgur.com/LqY8tvg.jpg' alt='sneakerhead' />    
                </div>
            <Link to='/users'>Users </Link>
            </HomeStyle >
        );
    }
}

export default Homepage;