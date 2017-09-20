import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HomeStyle } from '../styles/Homepage';

class Homepage extends Component {
    render() {
        return (
            <HomeStyle>
                <div className="home">
                    <h1 className="title">SNEAKERHEADZ</h1>
                    <Link to='/users'><img src='http://i.imgur.com/LqY8tvg.jpg' alt='sneakerhead' /></Link>    
                </div>
            
            </HomeStyle >
        );
    }
}

export default Homepage;