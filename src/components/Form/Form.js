import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import Swal from 'sweetalert2';
import './Form.css';

// Material UI components
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import TextField from '@material-ui/core/TextField';


class Form extends Component {
    state = {
        input: ''
    }

    handleInputChange = (event) => {
        this.setState({
            input: event.target.value
        })
        console.log(this.state);
    }

    handleDispatch = (e) => { // Dispatches information to redux with form validation
        if ( this.props.formType !== 'COMMENTS' && (this.state.input < 1 || this.state.input > 5 || this.state.input.length > 1)) {
            return Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'You\'ve entered an invalid number.',
                footer: 'Please enter a number from 1 to 5.'
              })
        }
        e.preventDefault();
        this.props.dispatch({type: this.props.formType, payload: this.state.input});
        this.props.history.push(this.props.nextPage);
    }

  render() {
    return (
      <div className="Form">
        <h1>{this.props.formHeader}</h1>
        <h4>On a scale from 1 to 5</h4>
        <h6>Page {this.props.page}</h6>
        <LinearProgress variant="determinate" value={(this.props.page - 1) * 25} />
        <form onSubmit={this.handleDispatch} className="flexForm">
            <Button type="button" onClick={() => this.props.history.push(this.props.prevPage)} variant="outlined" color="primary">Prev</Button> 
            {this.props.formType === 'COMMENTS' ?
            <TextField
            id="filled-textarea"
            label="Comments"
            placeholder="Tell us more"
            multiline
            className='formText'
            margin="normal"
            variant="filled"
            onChange={(event) => this.handleInputChange(event)}
          /> :
            <TextField
              id="standard-number"
              label="Your Rating"
              type="number"
              InputLabelProps={{
              shrink: true,
              }}
              margin="normal"
              className="formText"
              onChange={(event) => this.handleInputChange(event)}
              variant="filled"
            />
            }
            <Button type="submit" onClick={this.handleDispatch} variant="outlined" color="primary">Next</Button>
        </form>
      </div>
    );
  }
}

export default withRouter(connect()(Form));