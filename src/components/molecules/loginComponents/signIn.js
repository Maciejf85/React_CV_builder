import React, { Component } from 'react';
import LoginInput from 'components/atoms/Inputs/loginInput';
import Submit from 'components/atoms/Inputs/submit';
import { connect } from 'react-redux';

class SignIn extends Component {
  state = {
    email: 'Fialek85@gmail.com',
    id: '123',
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
    this.props.login(response, 'regular');
    this.setState({ email: '', id: '' });
  };

  render() {
    const { email, id } = this.state;
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
