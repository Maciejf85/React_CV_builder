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
  };

  handleSubmit = () => {
    const { login, password } = this.state;
    this.props.handleSubmit(login, password);
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
          placeholder="hasło"
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
