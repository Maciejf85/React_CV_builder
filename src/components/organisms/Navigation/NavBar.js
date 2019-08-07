import React from 'react';
import Logo from 'components/atoms/Logo/Logo';
import LoggedIn from 'components/atoms/LoggedIn/LoggedIn';
import NavButtons from 'components/molecules/navButtons/navButtons';
import styled from 'styled-components';

const StyledWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.primaryGrey};
`;

const NavBar = () => (
  <StyledWrapper>
    <Logo />
    <NavButtons />
    <LoggedIn />
  </StyledWrapper>
);

export default NavBar;
