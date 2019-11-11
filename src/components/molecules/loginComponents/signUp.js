import React, { Component } from 'react';
import LoginInput from 'components/atoms/Inputs/loginInput';
import Submit from 'components/atoms/Inputs/submit';
import ReCAPTCHA from 'react-google-recaptcha';
import { connect } from 'react-redux';

class SignUp extends Component {
  state = {
    login: '',
    password: '',
    name: '',
    surname: '',
    isVerified: false,
    recaptchaError: false,
  };

  handleForm = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = () => {
    const { isVerified, login, password, name, surname } = this.state;
    const { register } = this.props
    if (isVerified) {

      const fullName = `${name} ${surname}`
      const response = {
        name: fullName,
        email: login,
        id: password
      }
      const type = 'regular';
      register(response, type);
    }
    else this.setState({ recaptchaError: true });

  };

  handleRecaptcha = () => {
    this.setState({ isVerified: true });
  };

  render() {
    const { login, password, name, surname, recaptchaError } = this.state;
    const { error } = this.props;
    console.log('error', error);
    return (
      <>
        <LoginInput
          id="login"
          placeholder="email"
          value={login}
          onChange={this.handleForm}
          type="text"
          error={error}
        />

        <LoginInput
          id="password"
          placeholder="password"
          value={password}
          onChange={this.handleForm}
          type="password"
        />
        <LoginInput
          id="name"
          placeholder="imię"
          value={name}
          onChange={this.handleForm}
          type="text"
        />
        <LoginInput
          id="surname"
          placeholder="nazwisko"
          value={surname}
          onChange={this.handleForm}
          type="text"
        />
        <ReCAPTCHA
          sitekey="6LfEU8EUAAAAAL6ZBeahfQlVcovox9eYimxxUqDG"
          onChange={this.handleRecaptcha}
        />
        {recaptchaError && (
          <div style={{ color: 'red', fontStyle: 'italic' }}>kliknij ReCAPTCHA</div>
        )}
        <Submit id="submit" type="button" onClick={this.handleSubmit}>
          Zarejestruj
        </Submit>
      </>
    );
  }
}

const mapStateToProps = ({ serverResponse }) => serverResponse;
export default connect(mapStateToProps)(SignUp);
