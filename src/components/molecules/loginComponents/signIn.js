import React, { Component } from 'react';
import LoginInput from 'components/atoms/Inputs/loginInput';
import Checkbox from 'components/atoms/Inputs/checkbox';
import Submit from 'components/atoms/Inputs/submit';
import { connect } from 'react-redux';

class SignIn extends Component {
  state = {
    email: 'Fialek85@gmail.com',
    id: '123',
    autoLogin: false,
  };

  handleForm = e => {
    const { target } = e;
    const value = e.target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.id]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, id, autoLogin } = this.state;
    const response = { email, id };
    this.props.login(response, 'regular', autoLogin);
    this.setState({ email: '', id: '' });
  };

  render() {
    const { email, id, autoLogin } = this.state;
    const { error } = this.props;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <LoginInput
            id="email"
            placeholder="login"
            value={email}
            onChange={this.handleForm}
            type="text"
            error={error}
            require
          />

          <LoginInput
            id="id"
            placeholder="hasło"
            value={id}
            onChange={this.handleForm}
            type="password"
            error={error}
            require
          />
          <Checkbox
            type="checkbox"
            id="autoLogin"
            placeholder="Nie wylogowuj mnie"
            checked={autoLogin}
            onChange={this.handleForm}
          />
          <Submit id="submit" type="submit">
            Zaloguj
          </Submit>
        </form>
      </>
    );
  }
}

const mapStateToProps = ({ serverResponse }) => serverResponse;
export default connect(mapStateToProps)(SignIn);
