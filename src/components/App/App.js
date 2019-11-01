import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Link, Route} from 'react-router-dom';
import { connect } from 'react-redux';
// components to import
import HomePage from '../HomePage/HomePage';
import Feeling from '../Feeling/Feeling';

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
        <Route path="/feeling" component={Feeling}></Route>
        <br/>
      </div>
      <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </Router>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}

export default connect(mapReduxStateToProps)(App);
