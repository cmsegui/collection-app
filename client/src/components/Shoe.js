import React, { Component } from 'react';
import axios from 'axios';


class Shoe extends Component {
  render() {
    return (
      <div>
          <img src={this.props.shoe.img} alt='shoepic' /><br/>
          <h4>{this.props.shoe.name}</h4><br/>
          {this.props.shoe.year}<br/>
          {this.props.shoe.description}
      </div>
    );
  }
}

export default Shoe;
