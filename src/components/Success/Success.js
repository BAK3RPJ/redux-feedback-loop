import React, { Component } from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';

class Success extends Component {

    handleClearFeedbackReducer = () => {
        this.props.dispatch({type: 'CLEAR_FEEDBACK'});
        this.props.history.push('/');
    }

  render() {
    return (
      <div className="Success">
        <h4>Submission Success!</h4>
        <p> Your feedback has successfully been stored in out database, and will be reviewed shortly. Go back to the home page to complete another survey!</p>
        <Button onClick={this.handleClearFeedbackReducer} type="button" variant="outlined" color="primary">Go Home</Button>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
  }
  
  export default connect(mapReduxStateToProps)(Success);
