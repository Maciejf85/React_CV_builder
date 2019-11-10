import React, { Component } from 'react';
import LoginInput from 'components/atoms/Inputs/loginInput';
import Submit from 'components/atoms/Inputs/submit';
import ReCAPTCHA from 'react-google-recaptcha';

class SignUp extends Component {
  state = {
    login: '',
    password: '',
    name: '',
    surname: '',
    isVerified: false,
  };

  handleForm = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = () => {
    const { isVerified } = this.state;
    if (isVerified) console.log('succesfuly send');
    else console.log('confirm u r no robot');
  };

  handleRecaptcha = value => {
    console.log('value', value);
    this.setState({ isVerified: true });
  };

  render() {
    const { login, password, name, surname } = this.state;
    return (
      <>
        <LoginInput
          id="login"
          placeholder="email"
          value={login}
          onChange={this.handleForm}
          type="text"
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
        <Submit id="submit" type="button" onClick={this.handleSubmit}>
          Zarejestruj
        </Submit>
      </>
    );
  }
}

export default SignUp;
