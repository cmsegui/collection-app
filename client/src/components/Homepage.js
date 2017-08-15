import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Homepage extends Component {
    render() {
        return (
            <div>
                <h1>SNEAKERHEADZ</h1>
                <img src='http://i.imgur.com/LqY8tvg.jpg' alt='sneakerhead' />
            
                <Link to='/users'>Users </Link>
            </div>
        );
    }
}

export default Homepage;