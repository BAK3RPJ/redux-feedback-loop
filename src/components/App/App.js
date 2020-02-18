import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
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
          <div id="headline">
            <h4>Welcome to your classroom portal! We would love your feedback!</h4>
          </div>
          <div id="header">
            <div className="App-title">
              <h1>Feedback!</h1>
              <h4><i>Don't forget it!</i></h4>
            </div>
            <div id="links">
              <Link to="/"><p>Home</p></Link>
              <Link to="/admin"><p>Admin</p></Link>
            </div>
          </div>
          <Route path="/" exact component={HomePage}></Route>
          {/* Form component routes */}
          <Route path="/feeling" render={() => <Form page='1' formType='FEELING' prevPage='/' nextPage='/understanding' formHeader='How are you feeling today?' />}></Route>
          <Route path="/understanding" render={() => <Form page='2' formType='UNDERSTANDING' prevPage='/feeling' nextPage='/supported' formHeader='How well are you understanding the content?' />}></Route>
          <Route path="/supported" render={() => <Form page='3' formType='SUPPORTED' prevPage='/understanding' nextPage='/comments' formHeader='How well are you being supported?' />}></Route>
          <Route path="/comments" render={() => <Form page='4' formType='COMMENTS' prevPage='/supported' nextPage='/review' formHeader='Any comments you want to leave?' />}></Route>
          {/* Route to the confirmation page */}
          <Route path="/review" component={Review}></Route>
          {/* Success page after completing the feedback form */}
          <Route path="/success" component={Success}></Route>
          {/* admin page, accessible by the admin link on the header */}
          <Route path="/admin" component={Admin}></Route>
          <br />
        </div>
      </Router>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}

export default connect(mapReduxStateToProps)(App);
