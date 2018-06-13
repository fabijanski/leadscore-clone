import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './components/Header';
import ContactsList from './components/ContactsList';

import { contactsRequest, logoutRequest } from '../../apiRequests';
import { getContacts } from '../../selectors';

const styles = theme => ({
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.white
  },
  pendingInfo: {
    textAlign: 'center'
  }
});

class ContactsPage extends Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.any).isRequired,
    fetchContacts: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
    contacts: PropTypes.objectOf(PropTypes.any).isRequired
  };

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Header
          handleLogout={this.props.onLogout}
        />
        {
          this.props.contacts.pending &&
            <h2 className={classes.pendingInfo}>Loading results...</h2>
        }
        {
          this.props.contacts.data &&
            <ContactsList
              contacts={this.props.contacts.data}
            />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({ contacts: getContacts(state) });

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsRequest()),
  onLogout: () => dispatch(logoutRequest())
});

const ContactsPageContainer = connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
export default withStyles(styles)(ContactsPageContainer);

