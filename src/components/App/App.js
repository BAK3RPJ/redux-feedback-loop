import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Link, Route} from 'react-router-dom';
// components to import
import HomePage from '../HomePage/HomePage';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <Route path="/" exact component={HomePage}></Route>
        <br/>
      </div>
      </Router>
    );
  }
}

export default App;
