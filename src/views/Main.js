import React, { Component } from 'react';
import styled from 'styled-components';
import NavBar from 'components/organisms/Navigation/NavBar';
import Footer from 'components/organisms/Footer/footer';
import MainPage from 'components/organisms/MainPage/MainPage';
import store from 'store';
import { getData } from 'actions';

const StyledWrapper = styled.div`
  /* margin: 0 20px; */
  /* border: 1px solid orange; */
`;

class Main extends Component {
  componentDidMount() {
    // console.log(' Main Component Did mount');
    store.dispatch(getData());
  }

  render() {
    console.log(this.props);
    return (
      <StyledWrapper>
        <NavBar logo />
        <MainPage />

        <Footer />
      </StyledWrapper>
    );
  }
}

export default Main;
