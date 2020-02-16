import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <Paper elevation={4} style={{padding: "10px"}}>
          <Typography className="paperContents" variant = "h6" component="h4">When you are ready, please press the <i>proceed</i> button to begin your feedback submission.</Typography>
          <Typography className="paperContents" component="p">Please fill out your feedback as best you can. All pages require filling out, but you may choose whether or not you would like to leave extra comments.</Typography>
          <div className="paperContents"><Button type="button" onClick={() => this.props.history.push('/feeling')} variant="outlined" color="primary">Proceed</Button></div>
        </Paper>
      </div>
    );
  }
}

export default HomePage;
