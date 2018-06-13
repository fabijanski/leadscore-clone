import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import LoginForm from './components/LoginForm';


const styles = theme => ({
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.blue
  },
  title: {
    display: 'flex',
    fontSize: '3.5em',
    color: theme.palette.white,
    '& span': {
      fontWeight: 400
    }
  }
});

// eslint-disable-next-line react/prefer-stateless-function
class LoginPage extends Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.any).isRequired
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <h1 className={classes.title}>
          Lead<span>score</span>
        </h1>
        <LoginForm />
      </div>
    );
  }
}

export default withStyles(styles)(LoginPage);
