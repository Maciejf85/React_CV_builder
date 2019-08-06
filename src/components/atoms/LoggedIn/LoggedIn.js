import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  height: 30px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  padding: 0 10px;
  color: white;

  p {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

const LoggedIn = () => (
  <StyledWrapper>
    <p>Fialek85@gmail.com</p>
  </StyledWrapper>
);

export default LoggedIn;
