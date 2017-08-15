import React, { Component } from 'react';
import axios from 'axios';

class Shoebox extends Component {
  constructor() {
    super();
    this.state = {
      shoebox: [],
    }
  }
componentWillMount() {
    this._getShoeboxData();
  }

 _getShoeboxData = () => {
    axios.get('')
      .then((res) => {
        this.setState({ users: res.data })
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      
          <div>
           <h1>Shoebox</h1>
          </div>
       
    );
  }
}

export default Shoebox;
