import React from 'react';
import Logo from 'components/atoms/Logo/Logo';
import LoggedIn from 'components/atoms/LoggedIn/LoggedIn';
import NavButtons from 'components/molecules/topNavButtons/NavButtons';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

const StyledWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  width: 100%;
  height: 50px;
  margin-bottom: 30px;
  background-color: ${({ theme }) => theme.colors.primaryGrey};
`;

const NavBar = () => (
  <StyledWrapper>
    {/* {props.logo && <Logo />} */}
    <Logo />
    <NavButtons />
    <LoggedIn />
  </StyledWrapper>
);

// NavBar.propTypes = {
//   logo: PropTypes.bool,
// };

NavBar.defaultProps = {
  logo: false,
};

export default NavBar;
