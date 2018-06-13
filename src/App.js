import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {
  root: {
    width: '100wh',
    height: '100vh',
    display: 'flex'
  }
};

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.any).isRequired
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        Hello from the App!
      </div>
    );
  }
}

export default withStyles(styles)(App);
