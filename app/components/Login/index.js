/**
*
* Login
*
*/

import React from 'react';

import styles from './styles.css';
import validator from 'email-validator';
import TextInput from '../TextInput';

class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    login: React.PropTypes.func.isRequired,
    cancelLogin: React.PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.login = this.login.bind(this);
  }

  state = {};

  login() {
    const email = this.emailField.value();
    const isValid = validator.validate(email);
    this.setState({
      errorText: !isValid ? 'Please provide a valid email' : null,
    });

    if (isValid) {
      this.props.login(email);
    }
  }
  render() {
    return (
      <div className={styles.login}>
        <div
          className={styles.heading}
        >
          Login with your email
        </div>
        <TextInput
          placeholder="Your email"
          ref={f => { this.emailField = f; }}
          errorText={this.state.errorText}
        />
        <div
          className={styles.actionContainer}
        >
          <div
            className={styles.button}
            onClick={this.props.cancelLogin}
          >
            Cancel
          </div>
          <div
            className={styles.button}
            onClick={this.login}
          >
            log in
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
