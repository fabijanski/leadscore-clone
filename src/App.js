import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './store';
import LoginPage from './pages/LoginPage/LoginPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';


const styles = {
  root: {
    width: '100vw',
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
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/contacts" component={() => <ContactsPage />} />
            <Route render={() => <LoginPage />} />
          </Switch>
        </ConnectedRouter>
      </div>
    );
  }
}

export default withStyles(styles)(App);
