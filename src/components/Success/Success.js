import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper'

class Success extends Component {

  handleClearFeedbackReducer = () => {
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="Success">
        <div className="paperContainer">
          <Paper elevation={4} style={{ padding: "10px" }}>
            <h4>Submission Success!</h4>
            <p> Your feedback has successfully been stored in our database, and will be reviewed shortly. Go back to the home page to complete another survey!</p>
            <Button onClick={this.handleClearFeedbackReducer} type="button" variant="outlined" color="primary">Go Home</Button>
          </Paper>
        </div>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}

export default connect(mapReduxStateToProps)(Success);
