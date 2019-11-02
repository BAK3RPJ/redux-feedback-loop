import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Success extends Component {

    handleClearFeedbackReducer = () => {
        this.props.dispatch({type: 'CLEAR_FEEDBACK'})
    }

  render() {
    return (
      <div className="Success">
        <h4>Submission Success!</h4>
        <p> Your feedback has successfully been stored in out database, and will be reviewed shortly. Go back to the home page to complete another survey!</p>
        <Link to='/'><button onClick={this.handleClearFeedbackReducer} type="button">Go Home</button></Link>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
  }
  
  export default connect(mapReduxStateToProps)(Success);
