import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { loginRequest } from '../../../apiRequests';

const styles = theme => ({
  root: {
    display: 'flex',
    width: 560,
    height: 250,
    padding: theme.spacing.unit * 3,
    margin: theme.spacing.unit * 3
  },
  form: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  formControl: {
    marginBottom: theme.spacing.unit * 3
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 'auto'
  }
});

class LoginForm extends Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.any).isRequired,
    onLogin: PropTypes.func.isRequired,
    error: PropTypes.string
  };

  static defaultProps = {
    error: ''
  };

  state = {
    user: {
      email: '',
      password: ''
    },
    showPassword: false
  };

  handleInputChange = (event) => {
    const field = event.target.name;
    const { user } = this.state;
    user[field] = event.target.value;

    this.setState({ user });
  };

  handleFormSubmit = (event) => {
    const { email, password } = this.state.user;
    event.preventDefault();
    this.props.onLogin(email, password);
  };

  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };


  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.root}>
        <form className={classes.form} action="/" onSubmit={this.handleFormSubmit}>
          <FormControl
            className={classes.formControl}
            error={!!this.props.error}
            aria-describedby="email-error-text"
            required
          >
            <InputLabel
              htmlFor="email-error"
            >
              Email
            </InputLabel>
            <Input
              id="email-error"
              name="email"
              type="email"
              onChange={this.handleInputChange}
              value={this.state.user.email}
            />
            {
              !!this.props.error && <FormHelperText id="email-error-text">{this.props.error}</FormHelperText>
            }
          </FormControl>

          <FormControl
            className={classes.formControl}
            error={!!this.props.error}
            aria-describedby="password-error-text"
            required
          >
            <InputLabel
              htmlFor="password-error"
            >
              Password
            </InputLabel>
            <Input
              id="password-error"
              name="password"
              type={this.state.showPassword ? 'text' : 'password'}
              onChange={this.handleInputChange}
              value={this.state.user.password}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowPassword}
                    onMouseDown={this.handleMouseDownPassword}
                  >
                    {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {
              !!this.props.error && <FormHelperText id="password-error-text">{this.props.error}</FormHelperText>
            }
          </FormControl>

          <div className={classes.buttonContainer}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
            >
              Login
            </Button>
          </div>
        </form>
      </Card>
    );
  }
}

const mapStateToProps = state => ({ error: state.session.error });

const mapDispatchToProps = dispatch => ({
  onLogin: (username, password) => dispatch(loginRequest(username, password))
});

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export default withStyles(styles)(LoginFormContainer);
