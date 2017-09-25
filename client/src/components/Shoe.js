import React, { Component } from 'react';
import axios from 'axios';


class Shoe extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     shoe: {},
  //   }
  // }
  // componentWillMount() {
  //   this._getShoeData();
  // }
  // _getShoeData = () => {
  //   const id = this.props.match.params.id;
  //   axios.get(`/api/shoebox/${userEmail}/${id}`)
  //     .then((res) => {
  //       this.setState({ shoe: res.data })
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }



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
