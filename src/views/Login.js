import React, { Component } from 'react';
import styled from 'styled-components';
import Footer from 'components/organisms/Footer/Footer';
import store from 'store';
import image from 'assets/login.png';
import SignIn from 'components/molecules/loginComponents/signIn';
import SignUp from 'components/molecules/loginComponents/signUp';
import Facebook from 'components/organisms/FacebookAuth';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getMainData } from 'actions';
import path from '../path';

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
  padding: ${({ center }) => (center ? '10px 15px' : '20px 15px')};
  border: 1px solid rgb(216, 222, 226);
  border-radius: 7px;
  background: white;
  margin: 10px 0;
  font-size: ${({ theme }) => theme.fontSize.ms};
  text-align: ${({ center }) => center && 'center'};

  .clearButton {
    font-size: ${({ theme }) => theme.fontSize.ms};
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.colors.primaryBlue};
    &:hover {
      cursor: pointer;
    }
  }
`;

class Login extends Component {
  state = {
    isRegister: false,
  };

  componentDidUpdate() {
    console.log('login did update');
  }

  handleSubmit = response => {
    const { email, id } = response;
    store.dispatch(getMainData('facebook', email, id));
  };

  onChange = value => {
    console.log('Captcha value:', value);
  };

  render() {
    const { isRegister } = this.state;
    const { token } = this.props;
    if (token !== '') {
      return <Redirect to={path.main} />;
    }
    return (
      <>
        <StyledWrapper>
          <MainWrapper>
            <img src={image} alt="user" />
            <p>{isRegister ? 'Zarejestruj w ' : 'Zaloguj do '} CV-builder</p>
            <LoginWrapper>
              {!isRegister ? (
                <SignIn handleSubmit={this.handleSubmit} />
              ) : (
                <SignUp handleSubmit={this.handleSubmit} />
              )}
            </LoginWrapper>
            <LoginWrapper center>
              Nie masz konta ?
              <button
                type="button"
                className="clearButton"
                // eslint-disable-next-line react/no-access-state-in-setstate
                onClick={() => this.setState({ isRegister: !this.state.isRegister })}
              >
                {isRegister ? 'Zaloguj się' : 'Zarejestruj się'}
              </button>
            </LoginWrapper>
            <Facebook isRegister={isRegister} handleSubmit={this.handleSubmit} />

            {/* <div>
              <button type="button" onClick={() => this.props.history.push('/main')}>
                go to main
              </button>
            </div> */}
          </MainWrapper>
          <Footer />
        </StyledWrapper>
      </>
    );
  }
}
const MapStateToProps = state => state.personalData;
export default connect(MapStateToProps)(Login);
