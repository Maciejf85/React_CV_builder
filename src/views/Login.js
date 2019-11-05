import React, { Component } from 'react';
import styled from 'styled-components';
import Footer from 'components/organisms/Footer/Footer';
import store from 'store';
import { getMainData } from 'actions';

const StyledWrapper = styled.div`
  /* margin: 0 20px; */
  /* border: 1px solid orange; */
`;

class Login extends Component {
  componentDidMount() {
    store.dispatch(getMainData());
  }

  render() {
    return (
      <>
        <StyledWrapper>
          <Footer />
        </StyledWrapper>
      </>
    );
  }
}


export default Login;
