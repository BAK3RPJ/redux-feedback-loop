import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

const styles = theme => ({
  root: {
    width: '100%',
    margin: 'auto',
    marginTop: '40px'
  }
});

function getSteps() {
  return ['General Feeling', 'Understanding', 'Support Level', 'Comments', 'Finalize'];
}

class ProgressStepper extends React.Component {

  render() {
    const { classes } = this.props;
    const steps = getSteps();

    return (
      <div className={classes.root}>
        <Stepper activeStep={this.props.page - 1}> 
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {/* <pre>{JSON.stringify(this.props, null, 2)}</pre> */}
      </div>
    );
  }
}

Stepper.propTypes = {
  classes: PropTypes.object,
};

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(withStyles(styles)(ProgressStepper));