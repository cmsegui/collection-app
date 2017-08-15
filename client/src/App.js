import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      
        <Router>
          <div>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/users" component={Users} />
          </div>
        </Router>

  
    );
  }
}

export default App;

