import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import Swal from 'sweetalert2';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';

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
        <form onSubmit={this.handleDispatch}>
            <Button type="button" onClick={() => this.props.history.push(this.props.prevPage)} variant="outlined" color="primary">Prev</Button> 
            {this.props.formType === 'COMMENTS' ? 
            <textarea placeholder='Tell us more' onChange={(event) => this.handleInputChange(event)}/> :
            <input type="number" onChange={(event) => this.handleInputChange(event)}/>
            }
            <Button type="submit" onClick={this.handleDispatch} variant="outlined" color="primary">Next</Button>
        </form>
      </div>
    );
  }
}

export default withRouter(connect()(Form));