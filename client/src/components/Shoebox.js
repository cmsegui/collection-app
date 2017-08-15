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
    axios.get('/shoebox/${user.email}')
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




// componentWillMount() {
//         axios.get(`api/clothes`).then(res => {
//             this.setState({clothes: res.data})
//         });
//     }

//     render(){
//         return (
//             <div>
//                 
//                 <div>
//                 <h1>Kerusso2.0</h1>
//                     {this.state.shoebox.map((shoebox, i) => {
                       // shoebox.shoes.map()



//                         return (

//                             <div key={i}>
//                                 <Link to={`/shoebox/${user.email}`/></Link>
//                             </div>
//                         )
//                     })}
//                 </div>
//             </div>
//         );
//     }
// }

// export default Home;