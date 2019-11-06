import React, { Component } from 'react';
import styled from 'styled-components';
import Footer from 'components/organisms/Footer/Footer';
import store from 'store';
import image from 'assets/login.png';
import SignIn from 'components/molecules/loginComponents/signIn';
import SignUp from 'components/molecules/loginComponents/signUp';
import Facebook from 'components/organisms/FacebookAuth';

import { getMainData } from 'actions';

const StyledWrapper = styled.div`
  /* margin: 0 20px; */
`;
const MainWrapper = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  img {
    width: 65px;
    opacity: 0.8;
    margin: 10px;
  }
  p {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    color: ${({ theme }) => theme.colors.secondaryGrey};
    font-weight: ${({ theme }) => theme.font.thin};
    letter-spacing: -1px;
  }
`;

const LoginWrapper = styled.div`
  min-width: 310px;
  padding: 20px 15px;
  border: 1px solid rgb(216, 222, 226);
  border-radius: 7px;
  background: white;
  margin: 10px 0;
`;

class Login extends Component {
  state = {
    isRegister: false,
  };

  componentDidMount() {
    store.dispatch(getMainData());
  }

  onChange = value => {
    console.log('Captcha value:', value);
  };

  render() {
    const { isRegister } = this.state;
    return (
      <>
        <StyledWrapper>
          <MainWrapper>
            <img src={image} alt="user" />
            <p>{isRegister ? 'Zarejestruj w ' : 'Zaloguj do '} CV-builder</p>
            <LoginWrapper>{!isRegister ? <SignIn /> : <SignUp />}</LoginWrapper>
            <Facebook isRegister={isRegister} />

            <div>
              <button type="button" onClick={() => this.props.history.push('/main')}>
                go to main
              </button>
              <button
                type="button"
                onClick={() => this.setState({ isRegister: !this.state.isRegister })}
              >
                {!isRegister ? 'Zaloguj się' : 'Zarejestruj się'}
              </button>
            </div>
          </MainWrapper>
          <Footer />
        </StyledWrapper>
      </>
    );
  }
}

export default Login;
