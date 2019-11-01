import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

class Feeling extends Component {
    state = {
        feeling: ''
    }

    handleInputChange = (event, propertyName) => {
        this.setState({
            [propertyName]: event.target.value
        })
    }

    handleDispatch = () => {
        this.props.dispatch({type: 'FEELING', payload: this.state.feeling})
    }

  render() {
    return (
      <div className="Feeling">
        <h1>How are you feeling today?</h1>
        <h4>On a scale from 1 to 5</h4>
        <input placeholder="5 :)" onChange={(event) => this.handleInputChange(event, 'feeling')}/>
        <button type="button" onClick={this.handleDispatch}>Next</button>
      </div>
    );
  }
}

export default connect()(Feeling);
