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
    login: '',
    password: '',
    name: '',
    surname: '',
    nameValid: '',
    surnameValid: '',
    loginValid: '',
    passwordValid: '',

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
    this.setState({ loginValid: '', passwordValid: '', nameValid: '', surnameValid: '' });
  };

  handleValidation = () => {
    const { login, password, name, surname } = this.state;
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
        passwordValid: 'długość hasła conajmniej 5 znaków',
      });
    }
    if (name.length < 2) {
      error = true;
      this.setState({
        nameValid: 'długość imienia conajmniej 2 znaki',
      });
    }
    if (surname.length < 2) {
      error = true;
      this.setState({
        surnameValid: 'długość nazwiska conajmniej 2 znaki',
      });
    }
    console.log('error', error);
    if (!error) this.handleSubmit();
  };

  handleSubmit = () => {
    const { isVerified, login, password, name, surname } = this.state;
    const { register } = this.props;
    if (!isVerified) {
      const fullName = `${name} ${surname}`;
      const response = {
        name: fullName,
        email: login,
        id: password,
      };
      const type = 'regular';
      register(response, type);
    } else this.setState({ recaptchaError: true });
  };

  handleRecaptcha = () => {
    this.setState({ isVerified: true });
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
    } = this.state;
    const { error, success, isActive } = this.props;
    return success ? (
      <Notification>{success}</Notification>
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
