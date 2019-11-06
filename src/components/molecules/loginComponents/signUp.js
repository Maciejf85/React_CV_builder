import React, { Component } from 'react';
import LoginInput from 'components/atoms/Inputs/loginInput';
import Submit from 'components/atoms/Inputs/submit';
import ReCAPTCHA from 'react-google-recaptcha';
import styled from 'styled-components';

const LoginWrapper = styled.div`
  min-width: 310px;
  padding: 20px 15px;
  border: 1px solid rgb(216, 222, 226);
  border-radius: 7px;
  background: white;
  margin: 10px 0;
`;

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
    console.log('e.target.id', e.target.id);
  };

  handleSubmit = () => {
    console.log('submit');
  };

  handleRecaptcha = value => {
    console.log('value', value);
  };

  render() {
    const { login, password, name, surname } = this.state;
    return (
      <>
        <LoginInput
          id="email"
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
          type="password"
        />
        <LoginInput
          id="surname"
          placeholder="nazwisko"
          value={surname}
          onChange={this.handleForm}
          type="password"
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
