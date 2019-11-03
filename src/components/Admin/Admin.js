import React, { Component } from 'react';
import axios from 'axios';

class Admin extends Component {

componentDidMount() {
    this.getFeedbackData();
}

getFeedbackData = () => {
    axios({
        method: 'GET',
        url: '/feedback'
    })
    .then((results) => {
        console.log(results);
    })
    .catch ((err) => {
        console.log('error in GET', err);
    })
}

  render() {
    return (
      <div className="Success">
        <h4>Submission Success!</h4>
        <p> Your feedback has successfully been stored in out database, and will be reviewed shortly. Go back to the home page to complete another survey!</p>
        {/* <Link to='/'><button onClick={this.handleClearFeedbackReducer} type="button">Go Home</button></Link> */}
      </div> 
    );
  }
}
  
  export default Admin;
