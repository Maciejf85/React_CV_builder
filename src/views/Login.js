import React, { Component } from 'react';
import styled from 'styled-components';
import Footer from 'components/organisms/Footer/Footer';
import store from 'store';
import image from 'assets/login.png';
import LoginWrapper from 'components/molecules/LoginWrapper'
import { getMainData } from 'actions';

const StyledWrapper = styled.div`
  /* margin: 0 20px; */
`;
const MainWrapper = styled.div`
margin-top:100px;
display:flex;
justify-content:center;
align-items:center;
width:100%;
min-height:360px;
img{
  opacity:0.8;
  margin:20px;
}
`

class Login extends Component {
  componentDidMount() {
    store.dispatch(getMainData());
  }

  render() {
    return (
      <>
        <StyledWrapper>
          <MainWrapper>
            <div>Zaloguj</div>
            <button type='button' onClick={() => this.props.history.push('/main')} > go to main</button>
            <img src={image} alt='user' width='80px' />
            <LoginWrapper>

            </LoginWrapper>
            {/* <SignIn/>
            <SignUp/> */}
          </MainWrapper>
          <Footer />
        </StyledWrapper>
      </>
    );
  }
}


export default Login;
