import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Header from './components/Header';
import ContactsList from './components/ContactsList';

import data from '../../mockData';

const styles = theme => ({
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.white
  }
});

// eslint-disable-next-line react/prefer-stateless-function
class ContactsPage extends Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.any).isRequired
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Header />
        <ContactsList
          contacts={data}
        />
      </div>
    );
  }
}

export default withStyles(styles)(ContactsPage);
