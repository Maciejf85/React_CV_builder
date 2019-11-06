import React, { Component } from 'react';
import LoginInput from 'components/atoms/Inputs/loginInput';
import Submit from 'components/atoms/Inputs/submit';

class SignUp extends Component {
  state = {
    login: '',
    password: '',
    name: '',
    surname: '',
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
        <Submit id="submit" type="button" onClick={this.handleSubmit}>
          Zarejestruj
        </Submit>
      </>
    );
  }
}

export default SignUp;
