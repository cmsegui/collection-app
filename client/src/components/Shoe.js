import React, { Component } from 'react';
import axios from 'axios';


class Shoe extends Component {
  render() {
    return (
      <div>
        <div><img src={this.props.shoe.img} alt='shoepic' className="shoeimg" /></div>
        <div><h4>{this.props.shoe.name}</h4></div>
        <div>{this.props.shoe.year}</div>
        <div>{this.props.shoe.description}</div>
          
      </div>
    );
  }
}

export default Shoe;
