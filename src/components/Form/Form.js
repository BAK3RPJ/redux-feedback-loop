import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import Swal from 'sweetalert2'

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

    handleDispatch = (e) => {
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
        <form onSubmit={this.handleDispatch}>
            <button type="button" onClick={() => this.props.history.push(this.props.prevPage)}>Prev</button>
            {this.props.formType === 'COMMENTS' ? 
            <textarea placeholder='Tell us more' onChange={(event) => this.handleInputChange(event)}/> :
            <input type="number" onChange={(event) => this.handleInputChange(event)}/>
            }
            <button type="submit" onClick={this.handleDispatch}>Next</button>
        </form>
      </div>
    );
  }
}

export default withRouter(connect()(Form));