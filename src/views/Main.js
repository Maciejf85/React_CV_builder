import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavBar from 'components/organisms/Navigation/NavBar';
import Footer from 'components/organisms/Footer/footer';

const StyledWrapper = styled.div`
  /* margin: 0 20px; */
`;

const Main = () => {
  return (
    <StyledWrapper>
      <NavBar logo />
      <h1>Main Component</h1>

      <Footer />
    </StyledWrapper>
  );
};

// Main.propTypes = {
//   userName: PropTypes.object.isRequired,
//   skills: PropTypes.object.isRequired,
// };

const mapStateToProps = ({ userName, skills }) => ({ userName, skills });
export default connect(mapStateToProps)(Main);
