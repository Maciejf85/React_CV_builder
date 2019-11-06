import React, { Component } from 'react';
import LoginInput from 'components/atoms/Inputs/loginInput';
import Submit from 'components/atoms/Inputs/submit';

class SignIn extends Component {
  state = {
    login: '',
    password: '',
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
    const { login, password } = this.state;
    return (
      <>
        <LoginInput
          id="login"
          placeholder="login"
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
        <Submit id="submit" type="button" onClick={this.handleSubmit}>
          Zaloguj
        </Submit>
      </>
    );
  }
}

export default SignIn;
