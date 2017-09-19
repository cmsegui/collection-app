import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Users from './components/Users';
import Shoebox from './components/Shoebox';
import Shoe from './components/Shoe';

class App extends Component {
  render() {
    return (
      
        <Router>
          <div>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/users" component={Users} />
            <Route exact path="/shoebox/:email" component={Shoebox} />
            <Route exact path="/shoebox/:email/:shoeId" component={Shoe} />
          </div>
        </Router>

  
    );
  }
}

export default App;

