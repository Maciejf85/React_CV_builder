import React, { Component } from 'react';
import styled from 'styled-components';
import NavBar from 'components/organisms/Navigation/NavBar';
import Footer from 'components/organisms/Footer/footer';
import MainPage from 'components/organisms/MainPage/MainPage';
import store from 'store';
import { getData } from 'actions';
import ConfirmSidePanel from 'components/atoms/ConfirmSidePanel/ConfirmSidePanel';

const StyledWrapper = styled.div`
  /* margin: 0 20px; */
  /* border: 1px solid orange; */
`;

class Main extends Component {
  componentDidMount() {
    store.dispatch(getData());
  }

  render() {
    return (
      <>
        <StyledWrapper>
          <NavBar />
          <MainPage />
          <Footer />
          <ConfirmSidePanel primary />
        </StyledWrapper>
      </>
    );
  }
}

export default Main;
