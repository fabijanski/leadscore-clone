import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
  },
  title: {
    flex: 1
  }
};

// eslint-disable-next-line react/prefer-stateless-function
class Header extends Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.any).isRequired
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="title"
              color="inherit"
              className={classes.title}
            >
              LeadScore
            </Typography>
            <Button
              color="inherit"
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
