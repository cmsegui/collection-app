import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './components/Homepage';

class App extends Component {
  render() {
    return (
      
        <Router>
          <div>
            <Route exact path="/" component={Homepage}/>
          </div>
        </Router>

  
    );
  }
}

export default App;

