import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {
  render() {
    return (
      <div className="Review">
          <h4>You have finished your feedback, and here are your results.</h4>
          <div className="reviewResults">
              <h6>Your feeling about today: {this.props.feedbackReducer.feeling}</h6>
              <h6>Your understanding: {this.props.feedbackReducer.understanding}</h6>
              <h6>How supported you feel: {this.props.feedbackReducer.supported}</h6>
              <h6>Comments: {this.props.feedbackReducer.comments}</h6>
          </div>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
  }
  
  export default connect(mapReduxStateToProps)(Review);
