import React from 'react';
import Logo from 'components/atoms/Logo/Logo';
import LoggedIn from 'components/atoms/LoggedIn/LoggedIn';
import styled from 'styled-components';

const StyledWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.primaryGrey};
`;

const NavBar = () => (
  <StyledWrapper>
    <Logo />
    <LoggedIn />
  </StyledWrapper>
);

export default NavBar;
