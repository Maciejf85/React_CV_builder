import React, { Component } from 'react';
import styled from 'styled-components';
import FacebookLogin from 'react-facebook-login';

const Button = styled.div`
  .facebookButton {
    width: 260px;
    height: 35px;
    font-size: ${({ theme }) => theme.fontSize.m};
    background: #4c69ba;
    margin: 15px;
    border: none;
    border: 1px solid #4c69ba;
    color: white;
    &:hover {
      cursor: pointer;
      background: #3e58a1;
    }
  }
`;

export default class Facebook extends Component {
  state = {
    isLogedIn: false,
    userID: '',
    name: '',
    email: '',
    picture: '',
  };

  responseFacebook = response => {
    console.log('response', response);
    this.setState({
      userID: response.id,
    });
  };

  componentClicked = () => console.log('clicked');

  render() {
    let fbContent;
    const { isLogedIn } = this.state;
    const { isRegister } = this.props;
    console.log('this.state.userID', this.state.userID);

    if (isLogedIn) {
      fbContent = null;
    } else {
      fbContent = (
        <FacebookLogin
          appId="599616254114500"
          // autoLoad={!isRegister}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
          textButton={isRegister ? 'Zarejestruj przez facebook' : 'Zaloguj przez facebook'}
          cssClass="facebookButton"
        />
      );
    }

    return <Button>{fbContent}</Button>;
  }
}
