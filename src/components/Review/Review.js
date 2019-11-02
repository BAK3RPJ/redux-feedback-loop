import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

class Review extends Component {

handlePost = () => {
    Axios({
        method: 'POST',
        url: 'feedback',
        data: {
            feeling: this.props.feedbackReducer.feeling,
            understanding: this.props.feedbackReducer.understanding,
            support: this.props.feedbackReducer.support,
            comments: this.props.feedbackReducer.comments
        }
    })
    .then((res) => {
        console.log('in POST', res);
    })
    .catch((err) => {
        console.log('error in POST', err);
    })
}

  render() {
    return (
      <div className="Review">
          <h4>You have finished your feedback, and here are your results.</h4>
          <div className="reviewResults">
              <h6>Your feeling about today: {this.props.feedbackReducer.feeling}</h6>
              <h6>Your understanding: {this.props.feedbackReducer.understanding}</h6>
              <h6>How supported you feel: {this.props.feedbackReducer.support}</h6>
              <h6>Comments: {this.props.feedbackReducer.comments}</h6>
          </div>
          <button onClick={this.handlePost}>Submit</button>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
  }
  
  export default connect(mapReduxStateToProps)(Review);
