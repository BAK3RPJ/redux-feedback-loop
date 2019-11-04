import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <h4>When you are ready, please press the <i>proceed</i> button to begin your feedback submission.</h4>
        <p> Please fill out your feedback as best you can. All pages require filling out, but you may choose whether or not you would like to leave extra comments.</p>
        <Button type="button" onClick={() => this.props.history.push('/feeling')} variant="outlined" color="primary">Proceed</Button>
      </div>
    );
  }
}

export default HomePage;
