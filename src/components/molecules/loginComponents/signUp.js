import React, { Component } from 'react';
import LoginInput from 'components/atoms/Inputs/loginInput';
import Submit from 'components/atoms/Inputs/submit';
import ReCAPTCHA from 'react-google-recaptcha';
import Notification from 'components/atoms/LoginNotification';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import store from 'store';
import { connect } from 'react-redux';

class SignUp extends Component {
  state = {
    login: `${Math.random().toFixed(2) * 10000000}@wp.pl`,
    password: '123456',
    name: 'Maciej',
    surname: 'Fiałkowski',
    nameValid: '',
    surnameValid: '',
    loginValid: '',
    passwordValid: '',
    autoLogin: false,

    isVerified: false,
    recaptchaError: false,
  };

  componentWillUnmount() {
    store.dispatch({ type: 'CLEAR_REQUEST' });
  }

  handleForm = e => {
    const nameRegex = /^[a-zA-ZąćęłńóśźżĄĘŁŃÓŚŹŻ]+$/;
    if (e.target.id === 'name' || e.target.id === 'surname') {
      if (nameRegex.test(e.target.value) || e.target.value.length < 1) {
        this.setState({
          [e.target.id]: e.target.value,
        });
      }
    } else {
      this.setState({
        [e.target.id]: e.target.value,
      });
    }
  };

  handleClearErrors = () => {
    store.dispatch({ type: 'CLEAR_REQUEST' });

    this.setState({
      loginValid: '',
      passwordValid: '',
      nameValid: '',
      surnameValid: '',
      recaptchaError: false,
    });
  };

  handleValidation = () => {
    const { login, password, name, surname, isVerified } = this.state;
    this.handleClearErrors();
    let error = false;
    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailRegex.test(login)) {
      error = true;
      this.setState({
        loginValid: 'nieprawidłowy format email',
      });
    }
    if (password.length < 5) {
      error = true;
      this.setState({
        passwordValid: 'długość hasła co najmniej 5 znaków',
      });
    }
    if (name.length < 2) {
      error = true;
      this.setState({
        nameValid: 'długość imienia co najmniej 2 znaki',
      });
    }
    if (surname.length < 2) {
      error = true;
      this.setState({
        surnameValid: 'długość nazwiska co najmniej 2 znaki',
      });
    }

    if (!isVerified === false) {
      error = true;
      this.setState({ recaptchaError: true });
    }

    if (!error) this.handleSubmit();
  };

  handleSubmit = () => {
    const { login, password, name, surname } = this.state;
    const { register } = this.props;
    const fullName = `${name} ${surname}`;
    const response = {
      name: fullName,
      email: login,
      id: password,
    };
    const type = 'regular';
    register(response, type);
  };

  handleLogin = e => {
    e.preventDefault();
    this.setState({ autoLogin: true });
    const { login: email, password: id } = this.state;
    const response = { email, id };
    this.props.login(response, 'regular', 'false');
  };

  handleRecaptcha = () => {
    this.setState({ isVerified: true, recaptchaError: false });
  };

  render() {
    const {
      login,
      password,
      name,
      surname,
      recaptchaError,
      loginValid,
      passwordValid,
      nameValid,
      surnameValid,
      autoLogin,
    } = this.state;
    const { error, success, isActive } = this.props;
    return success || autoLogin ? (
      <>
        <Notification>
          {autoLogin ? (
            <FontAwesomeIcon icon={faSpinner} spin style={{ fontSize: '35px' }} />
          ) : (
            <span>{success}</span>
          )}
        </Notification>

        <Submit id="login" type="button" onClick={this.handleLogin}>
          Zaloguj
        </Submit>
      </>
    ) : (
      <>
        <LoginInput
          id="login"
          placeholder="e-mail"
          value={login}
          onChange={this.handleForm}
          type="text"
          error={error}
          validation={loginValid}
        />

        <LoginInput
          id="password"
          placeholder="hasło"
          value={password}
          onChange={this.handleForm}
          type="password"
          validation={passwordValid}
          tip="co najmniej 5 znaków"
        />
        <LoginInput
          id="name"
          placeholder="imię"
          value={name}
          onChange={this.handleForm}
          type="text"
          validation={nameValid}
        />
        <LoginInput
          id="surname"
          placeholder="nazwisko"
          value={surname}
          onChange={this.handleForm}
          type="text"
          validation={surnameValid}
        />
        <ReCAPTCHA
          sitekey="6LfEU8EUAAAAAL6ZBeahfQlVcovox9eYimxxUqDG"
          onChange={this.handleRecaptcha}
          style={{ marginTop: '25px' }}
        />
        {recaptchaError && (
          <div style={{ color: 'red', fontStyle: 'italic' }}>kliknij ReCAPTCHA</div>
        )}

        {isActive ? (
          <Notification>
            <FontAwesomeIcon icon={faSpinner} spin style={{ fontSize: '35px' }} />
          </Notification>
        ) : (
          <Submit id="submit" type="button" onClick={this.handleValidation}>
            Zarejestruj
          </Submit>
        )}
      </>
    );
  }
}

const mapStateToProps = ({ serverResponse }) => serverResponse;
export default connect(mapStateToProps)(SignUp);
