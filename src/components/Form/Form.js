import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';

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
            {this.props.formType === 'COMMENTS' ? 
            <textarea placeholder='Tell us more' onChange={(event) => this.handleInputChange(event)}/> :
            <input onChange={(event) => this.handleInputChange(event)}/>
            }
            <button type="submit" onClick={this.handleDispatch}>Next</button>
        </form>
      </div>
    );
  }
}

export default withRouter(connect()(Form));