import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Swal from 'sweetalert2';
import './Form.css';
import Stepper from './Stepper';

// Material UI components
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

class Form extends Component {
  state = {
    input: ''
  }

  // on change event listener for data to send to redux
  handleInputChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  // Dispatches information to redux with form validation
  handleDispatchNext = (e) => { 
    // input validation for numbered inputs, must be between 1 and 5
    if (this.props.formType !== 'COMMENTS' && (this.state.input < 1 || this.state.input > 5 || this.state.input.length > 1)) {
      return Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'You\'ve entered an invalid number.',
        footer: 'Please enter a number from 1 to 5.'
      })
    }
    e.preventDefault();
    this.props.dispatch({ type: this.props.formType, payload: this.state.input });
    this.props.history.push(this.props.nextPage);
  }

  handleClickPrev = (e) => {
    e.preventDefault();
    this.props.history.push(this.props.prevPage);
  }

  render() {
    return (
      <div className="Form">
        <div className="stepperContainer">
          <Stepper page={this.props.page} />
        </div>
        <div className="paperContainer">
        <Paper elevation={4} style={{ padding: "10px" }}>
          <h1>{this.props.formHeader}</h1>
          {/* This text will only render for form pages that require numbered ratings */}
          {this.props.formType !== 'COMMENTS' && <h4>On a scale from 1 to 5</h4>}
          <h6>Page {this.props.page}</h6>
          <form onSubmit={this.handleDispatchNext} className="flexForm">
            <Button type="button" onClick={this.handleClickPrev} variant="outlined" color="primary">Prev</Button>
            {this.props.formType === 'COMMENTS' ?
              // will conditionally render for the comment page
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
                // conditionally renders for the input pages
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
            <Button type="submit" onClick={this.handleDispatchNext} variant="outlined" color="primary">Next</Button>
          </form>
        </Paper>
        </div>
      </div>
    );
  }
}

export default withRouter(connect()(Form));