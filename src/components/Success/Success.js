import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Success extends Component {
  render() {
    return (
      <div className="Success">
        <h4>Submission Success!</h4>
        <p> Your feedback has successfully been stored in out database, and will be reviewed shortly. Go back to the home page to complete another survey!</p>
        <Link to='/'><button type="button">Go Home</button></Link>
      </div>
    );
  }
}

export default Success;
