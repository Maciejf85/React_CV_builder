import React, { Component } from 'react';
import LoginInput from 'components/atoms/Inputs/loginInput';
import Checkbox from 'components/atoms/Inputs/checkbox';
import Submit from 'components/atoms/Inputs/submit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Notification from 'components/atoms/LoginNotification';

import store from 'store';
import { connect } from 'react-redux';

class SignIn extends Component {
  state = {
    email: '',
    id: '',
    idValidation: '',
    emailValidation: '',
    autoLogin: false,
  };

  componentWillUnmount() {
    store.dispatch({ type: 'CLEAR_REQUEST' });
  }

  handleForm = e => {
    const { target } = e;
    const value = e.target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.id]: value,
    });
  };

  handleClearErrors = () => {
    this.setState({ emailValidation: '', idValidation: '' });
    // store.dispatch({ type: 'CLEAR_REQUEST' });
    store.dispatch({ type: 'CLEAR_REQUEST' });
  };

  handleValidation = e => {
    e.preventDefault();
    this.handleClearErrors();
    let error = false;
    const { email, id } = this.state;
    if (id.length === 0) {
      error = true;
      this.setState({ idValidation: 'pole nie może być puste' });
    }
    if (email.length === 0) {
      error = true;
      this.setState({ emailValidation: 'pole nie może być puste' });
    }
    if (!error) this.handleSubmit();
  };

  handleSubmit = () => {
    const { email, id, autoLogin } = this.state;
    const response = { email, id };
    this.props.login(response, 'regular', autoLogin);
  };

  render() {
    const { email, id, autoLogin, idValidation, emailValidation } = this.state;
    const { error, isActive } = this.props;
    return (
      <>
        <form onSubmit={this.handleValidation}>
          <LoginInput
            id="email"
            placeholder="login"
            value={email}
            onChange={this.handleForm}
            type="text"
            validation={emailValidation}
            error={error}
          />

          <LoginInput
            id="id"
            placeholder="hasło"
            value={id}
            onChange={this.handleForm}
            type="password"
            error={error}
            validation={idValidation}
          />
          <Checkbox
            type="checkbox"
            id="autoLogin"
            placeholder="Nie wylogowuj mnie"
            checked={autoLogin}
            onChange={this.handleForm}
          />
          {isActive ? (
            <Notification>
              <FontAwesomeIcon icon={faSpinner} spin style={{ fontSize: '35px' }} />
            </Notification>
          ) : (
            <Submit id="submit" type="submit">
              Zaloguj
            </Submit>
          )}
        </form>
      </>
    );
  }
}

const mapStateToProps = ({ serverResponse }) => serverResponse;
export default connect(mapStateToProps)(SignIn);
