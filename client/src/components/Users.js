import React, { Component } from 'react';
import axios from 'axios'
class Users extends Component {
    constructor() {
      super();
      this.state = {
        users: [],
      }
    }
    componentWillMount() {
      this._getUserData();
    }

    _getUserData = () => {
      console.log('hit function')
    axios.get(`http://localhost:3000/api/user/`)
      .then((res) => {
        const users = res.data
        console.log(users)
        // this.setState({users: res.data})
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
    }

  render() {
    return (
      <div>
        <h1>The SneakerHeadz:</h1>
          {this.state.users.map((user, i)=> {
            return(
              <div key={i}>
                <li></li>
              </div>
            )
          })}


      </div>
      
    );
  }
}

export default Users;
