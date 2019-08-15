import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.nav`
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 50px;
  background: ${({ theme }) => theme.colors.primaryGrey};
  width: 100%;
  color: white;
  padding: 10px;
`;

const NavBar = () => (
  <StyledWrapper>
    <p>Footer</p>
  </StyledWrapper>
);

export default NavBar;
