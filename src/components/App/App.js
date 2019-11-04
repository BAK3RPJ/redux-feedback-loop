import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
// components to import
import HomePage from '../HomePage/HomePage';
import Form from '../Form/Form';
import Review from '../Review/Review';
import Success from '../Success/Success';
import Admin from '../Admin/Admin';

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
        <Route path="/feeling" render={() => <Form page='1' formType='FEELING' prevPage='/' nextPage='/understanding' formHeader='How are you feeling today?' />}></Route>
        <Route path="/understanding" render={() => <Form page='2' formType='UNDERSTANDING' prevPage='/feeling' nextPage='/supported' formHeader='How well are you understanding the content?' />}></Route>
        <Route path="/supported" render={() => <Form page='3' formType='SUPPORTED' prevPage='/understanding' nextPage='/comments' formHeader='How well are you being supported?' />}></Route>
        <Route path="/comments" render={() => <Form page='4' formType='COMMENTS' prevPage='/supported' nextPage='/review' formHeader='Any comments you want to leave?' />}></Route>
        <Route path="/review" component={Review}></Route>
        <Route path="/success" component={Success}></Route>
        <Route path="/admin" component={Admin}></Route>
        <br/>
      </div>
      </Router>
    );
  }
}

// const mapReduxStateToProps = (reduxState) => {
//   return reduxState;
// }

export default connect()(App);
