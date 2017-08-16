import React, { Component } from 'react';
//import axios from 'axios';
//import Users from './components/users';

class Shoebox extends Component {
  constructor() {
    super();
    this.state = {
      shoebox: [],
    }
  }
  componentWillMount() {
    console.log('hi')
    console.log(this.props);
    this._getShoeboxData();
  }


  _getShoeboxData = () => {
    // axios.get(`/user/${user.email}`)
    //   .then((res) => {
    //     console.log(res.data)
    //     this.setState({ shoebox: res.data.shoebox })
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }
  render() {
    return '';
  }
    
    // return (
    //   <div>
    //     <h1>Shoebox</h1>
    //     {this.state.shoebox.map((shoebox, i) => {
    //       shoebox.shoes.map((shoe) => {
    //         return (<div key={i}>)
    //       });

          

          
    //     })
    //     }
}

        export default Shoebox;


