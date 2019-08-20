import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavBar from 'components/organisms/Navigation/NavBar';
import Footer from 'components/organisms/Footer/Footer';
import MainPage from 'components/organisms/MainPage/MainPage';

const StyledWrapper = styled.div`
  /* margin: 0 20px; */
  border: 1px solid orange;
`;

const Main = () => {
  return (
    <StyledWrapper>
      <NavBar logo />
      <MainPage />

      <Footer />
    </StyledWrapper>
  );
};

const mapStateToProps = ({ userName, skills }) => ({ userName, skills });
export default connect(mapStateToProps)(Main);
