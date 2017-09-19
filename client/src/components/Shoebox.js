import React, { Component } from 'react';
import axios from 'axios';
import Shoe from './Shoe'


class Shoebox extends Component {
  constructor() {
    super();
    this.state = {
      shoebox: {
        shoes: []
      },
    }
  }
  componentWillMount() {
    console.log('hi')
    console.log(this.props);
    this._getShoeboxData();
  }


  _getShoeboxData = () => {
    const userEmail = this.props.match.params.email
    console.log(userEmail)
    axios.get(`/api/user/${userEmail}`)
      .then((res) => {
        console.log(res.data)
        this.setState({ shoebox: res.data.shoebox })
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    console.log(typeof this.state.shoebox.shoes);

    const shoes = this.state.shoebox.shoes.map((shoe, i) => {
      return <Shoe key={i} shoe={shoe}/>
    })

    console.log(shoes);

    return (
      <div>
        <h1>Shoebox</h1>
        {shoes}
      </div>
    )
  }
}

export default Shoebox;


