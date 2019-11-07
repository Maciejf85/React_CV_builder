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
  };

  responseFacebook = response => {
    const { handleSubmit } = this.props;
    handleSubmit(response, 'facebook');
  };

  componentClicked = () => console.log('clicked');

  render() {
    let fbContent;
    const { isLogedIn } = this.state;
    const { isRegister } = this.props;

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
