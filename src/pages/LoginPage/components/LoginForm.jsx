import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
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
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.objectOf(PropTypes.object).isRequired,
    user: PropTypes.objectOf(PropTypes.string).isRequired
  };

  state = {
    emailError: false,
    passwordError: false,
    showPassword: false
  };

  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };


  render() {
    const {
      classes, onChange, onSubmit, errors
    } = this.props;

    const { emailError, passwordError } = this.state;

    return (
      <Card className={classes.root}>
        <form className={classes.form} action="/" onSubmit={onSubmit}>
          <FormControl
            className={classes.formControl}
            error={emailError}
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
              onChange={onChange}
              value={this.props.user.email}
            />
            {
              emailError && <FormHelperText id="email-error-text">{errors.email}</FormHelperText>
            }
          </FormControl>

          <FormControl
            className={classes.formControl}
            error={passwordError}
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
              onChange={onChange}
              value={this.props.user.password}
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
              passwordError && <FormHelperText id="password-error-text">{errors.password}</FormHelperText>
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

export default withStyles(styles)(LoginForm);
