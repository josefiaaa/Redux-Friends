import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './components/Login';
import Home from './components/Home';
import FriendsList from './components/FriendsList';


import './App.css';

class App extends Component {
  render() {
    return (
      <Router >
        <div className="App">
          <Route exact path='/' component={Home} />
          <Route path="/login" component={Login} />
          <Route path='/friends-list' component={FriendsList} />
        </div>
      </Router>
    );
  }
}

export default App;
