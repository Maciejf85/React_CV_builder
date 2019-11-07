import React, { Component } from 'react';
import LoginInput from 'components/atoms/Inputs/loginInput';
import Submit from 'components/atoms/Inputs/submit';

class SignIn extends Component {
  state = {
    email: '',
    id: '',
  };

  handleForm = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, id } = this.state;
    const response = { email, id };
    this.props.handleSubmit(response, 'regular');
    this.setState({ email: '', id: '' });
  };

  render() {
    const { email, id } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <LoginInput
            id="email"
            placeholder="login"
            value={email}
            onChange={this.handleForm}
            type="text"
            require
          />

          <LoginInput
            id="id"
            placeholder="hasło"
            value={id}
            onChange={this.handleForm}
            type="password"
            require
          />
          <Submit id="submit" type="submit">
            Zaloguj
          </Submit>
        </form>
      </>
    );
  }
}

export default SignIn;
