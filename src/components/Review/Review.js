import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import Swal from 'sweetalert2';
import Button from '@material-ui/core/Button'; //I have absolutely no idea why this doesn't work. This same import works in every other component.
import LinearProgress from '@material-ui/core/LinearProgress';

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
        Swal.fire({
            position: 'center',
            type: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          });
        this.props.history.push('/success');
        this.props.dispatch({type: 'CLEAR_FEEDBACK'});
    })
    .catch((err) => {
        console.log('error in POST', err);
    })
}

  render() {
    return (
      <div className="Review">
          <h4>You have finished your feedback, and here are your results.</h4>
          <LinearProgress variant="determinate" value={100} />
          <div className="reviewResults">
              <h6>Your feeling about today: {this.props.feedbackReducer.feeling}</h6>
              <h6>Your understanding: {this.props.feedbackReducer.understanding}</h6>
              <h6>How supported you feel: {this.props.feedbackReducer.support}</h6>
              <h6>Comments: {this.props.feedbackReducer.comments}</h6>
          </div>
          <Button onClick={this.handlePost} variant='outlined' color='primary'>Submit</Button>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
  }
  
  export default connect(mapReduxStateToProps)(Review);
